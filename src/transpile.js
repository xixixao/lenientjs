/* eslint-env browser */

const worker = new window.PromiseWorker(
  new Worker(window.location.pathname + 'prettier/worker.js'),
);

const babelPluginsFromLenient = ['lenient'];
const babelPluginsFromJS = [];

const defaultPrettierOptions = {
  bracketSpacing: false,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
};

const prettierOptionsToLenient = {
  lenient: true,
  semi: false,
};

const prettierOptionsToJS = {
  semi: true,
};

export const jsToLenient = (text, {printWidth}) =>
  formatAsync(text, babelPluginsFromJS, {
    ...defaultPrettierOptions,
    ...prettierOptionsToLenient,
    printWidth,
  });

export const lenientToJS = (text, {printWidth}) =>
  formatAsync(text.trim(), babelPluginsFromLenient, {
    ...defaultPrettierOptions,
    ...prettierOptionsToJS,
    printWidth,
  });

export const lenientToLenient = (text, {printWidth}) =>
  formatAsync(text.trim(), babelPluginsFromLenient, {
    ...defaultPrettierOptions,
    ...prettierOptionsToLenient,
    printWidth,
  });

const formatAsync = (text, plugins, options) => {
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
      ...plugins,
    ],
  };
  return worker
    .postMessage({
      text: text,
      options: options,
      parserOptions: babylonOptions,
    })
    .then(({formatted}) => formatted);
};

// Warm up the worker (while editor loads)
formatAsync('', []);
