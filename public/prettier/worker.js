/* eslint-env worker */
/* eslint no-var: off, strict: off */

// "Polyfills" in order for all the code to run
self.global = self;
self.util = {};
self.path = {};
self.path.resolve = self.path.join = self.path.dirname = function() {
  return '';
};
self.path.parse = function() {
  return {root: ''};
};
self.Buffer = {
  isBuffer: function() {
    return false;
  },
};
self.constants = {};
// eslint-disable-next-line
module$1 = module = os = crypto = buffer = {};
self.fs = {readFile: function() {}};
// eslint-disable-next-line no-undef
os.homedir = function() {
  return '/home/prettier';
};
os.EOL = '\n';
self.process = {
  argv: [],
  env: {PRETTIER_DEBUG: true},
  version: 'v8.5.0',
  binding: function() {
    return {};
  },
  cwd: function() {
    return '';
  },
};

var parsersLoaded = {};

self.assert = {ok: function() {}, strictEqual: function() {}};
self.require = function require(path) {
  if (path === 'stream') {
    return {PassThrough() {}};
  }
  if (path === './third-party') {
    return {findParentDir() {}};
  }

  if (~path.indexOf('parser-')) {
    var parser = path.replace(/.+-/, '');
    if (!parsersLoaded[parser]) {
      importScripts('lib/parser-' + parser + '.js');
      parsersLoaded[parser] = true;
    }
    return self[parser];
  }

  return self[path];
};
self.__dirname = '';
self.events = {
  EventEmitter: function() {},
};

var prettier;
importScripts('lib/index.js');
if (typeof prettier === 'undefined') {
  prettier = module.exports; // eslint-disable-line
}
if (typeof prettier === 'undefined') {
  prettier = index; // eslint-disable-line
}

importScripts('promise-worker.register.js');

registerPromiseWorker(function(message) {
  var options = message.options || {};
  // options.parser = options.parser || 'babylon';
  options.parser = function(text, {babylon}, options) {
    return babylon(text, {}, options, message.parserOptions);
  };

  delete options.parserOptions;
  delete options.ast;
  delete options.doc;
  delete options.output2;

  var formatted = formatCode(message.text, options);
  var doc;
  var ast;
  var formatted2;

  if (message.ast) {
    var actualAst;
    var errored = false;
    try {
      actualAst = prettier.__debug.parse(message.text, options).ast;
      ast = JSON.stringify(actualAst);
    } catch (e) {
      errored = true;
      ast = String(e);
    }
    if (!errored) {
      try {
        ast = formatCode(ast, {parser: 'json'});
      } catch (e) {
        ast = JSON.stringify(actualAst, null, 2);
      }
    }
  }

  if (message.doc) {
    try {
      doc = prettier.__debug.formatDoc(
        prettier.__debug.printToDoc(message.text, options),
        {parser: 'babylon'},
      );
    } catch (e) {
      doc = String(e);
    }
  }

  if (message.formatted2) {
    formatted2 = formatCode(formatted, options);
  }

  return {
    formatted: formatted,
    doc: doc,
    ast: ast,
    formatted2: formatted2,
    version: prettier.version,
  };
});

function formatCode(text, options) {
  try {
    result = prettier.format(text, options);
    return {code: result};
  } catch (e) {
    if (e.constructor && e.constructor.name === 'SyntaxError') {
      // Likely something wrong with the user's code
      return {error: String(e)};
    }
    // Likely a bug in Prettier
    // Provide the whole stack for debugging
    return {error: e.stack || String(e)};
  }
}
