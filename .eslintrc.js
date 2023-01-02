module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': 'plugin:react/recommended',
  'overrides': [],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'require-jsdoc': [
      'error', {
        'require': {
          'FunctionDeclaration': true,
          'MethodDefinition': false,
          'ClassDeclaration': false,
          'ArrowFunctionExpression': false,
          'FunctionExpression': false,
        },
      }],
  },
};
