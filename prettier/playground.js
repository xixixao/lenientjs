/* eslint-env browser */
/* eslint no-var: off, strict: off, prefer-arrow-callback: off */

!(function() {
  var worker = new window.PromiseWorker(
    new Worker(window.location.pathname + 'prettier/worker.js'),
  );
  worker.onmessage = function(message) {
    console.log(message.data.formatted);
  };

  // Warm up the worker (load the current parser while CodeMirror loads)
  // worker.postMessage({text: '', options: state.options});
  formatAsync('x = 5');

  function jsToLenient(text, options) {
    return formatAsync(text, [], {
      printWidth: options.printWidth,
      lenient: true,
      semi: false,
      // defaults
      bracketSpacing: false,
      singleQuote: true,
      trailingComma: 'all',
    });
  }
  window.jsToLenient = jsToLenient;
  function lenientToJS(text, options) {
    return formatAsync(text.trim(), ['lenient'], {
      printWidth: options.printWidth,
      semi: true,
      // defaults
      bracketSpacing: false,
      singleQuote: true,
      trailingComma: 'all',
    });
  }
  window.lenientToJS = lenientToJS;

  function formatAsync(text, plugins, options) {
    var babylonOptions = {
      sourceType: 'module',
      allowImportExportEverywhere: true,
      allowReturnOutsideFunction: true,
      plugins: [
        'jsx',
        'flow',
        'doExpressions',
        'objectRestSpread',
        'decorators',
        'classProperties',
        'exportDefaultFrom',
        'exportNamespaceFrom',
        'asyncGenerators',
        'functionBind',
        'functionSent',
        'dynamicImport',
        'numericSeparator',
        'importMeta',
        'optionalCatchBinding',
        'optionalChaining',
        'classPrivateProperties',
        'pipelineOperator',
        'nullishCoalescingOperator',
      ].concat(plugins),
    };
    return worker
      .postMessage({
        text: text,
        options: options,
        parserOptions: babylonOptions,
        // ast: options.ast,
        // doc: options.doc,
        // formatted2: options.output2
      })
      .then(function(result) {
        return result.formatted;
      });
  }
})();
