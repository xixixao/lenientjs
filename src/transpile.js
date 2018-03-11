/* eslint-env browser */

const worker = new window.PromiseWorker(
  new Worker(window.location.pathname + 'prettier/worker.js'),
);

const defaultPrettierOptions = {
  bracketSpacing: false,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
};

export const jsToLenient = (text, options) =>
  formatAsync(text, [], {
    ...defaultPrettierOptions,
    printWidth: options.printWidth,
    lenient: true,
    semi: false,
  });

export const lenientToJS = (text, options) =>
  formatAsync(text.trim(), ['lenient'], {
    ...defaultPrettierOptions,
    printWidth: options.printWidth,
    semi: true,
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
