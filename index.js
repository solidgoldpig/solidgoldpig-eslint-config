module.exports = {
  extends: [
    'eslint:recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 6
  },
  plugins: [],
  rules: {
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'no-extra-parens': ['error', 'all'],
    'no-var': 'error',
    'object-curly-spacing': ['error', 'never'],
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single'],
    'template-curly-spacing': ['error', 'never'],
    'valid-jsdoc': [
      'error', {
        matchDescription: '.+',
        prefer: {
          arg: 'param',
          argument: 'param',
          returns: 'return'
        },
        preferType: {
          Array: 'array',
          Boolean: 'boolean',
          Function: 'function',
          Number: 'number',
          Object: 'object',
          String: 'string',
          Symbol: 'symbol'
        },
        requireParamDescription: true,
        requireReturn: true,
        requireReturnType: true,
        requireReturnDescription: true
      }
    ]
  }
}
