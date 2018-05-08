const babylonOptions = {
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
  ],
};

const prettierOptions = {
  bracketSpacing: false,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
};

module.exports = {babylonOptions, prettierOptions};
