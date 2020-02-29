module.exports = {
  plugins: [
    '@typescript-eslint',
    'import',
    'eslint-comments',
    // 'eslint-plugin-tsdoc', // TODO: waiting on https://github.com/microsoft/tsdoc/issues/128
    'functional'
  ],
  extends: [
    'eslint:all',
    'plugin:@typescript-eslint/all',
    'plugin:functional/external-recommended',
    'plugin:functional/all',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  rules: {
    'max-lines': ['error', 1000],
    'max-params': ['error', 4],
    'max-params': 'off',
    complexity: ['error', 5],
    'max-statements': 'off',
    'max-lines-per-function': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off', // deprecated in favor of @typescript-eslint/ban-ts-comment
    '@typescript-eslint/no-type-alias': 'off',
    'line-comment-position': ['error', { ignorePattern: 'cspell' }],
    'no-inline-comments': 'off',
    'capitalized-comments': 'off',
    'id-length': 'off',
    'no-undefined': 'off',
    '@typescript-eslint/no-magic-numbers': [
      'error',
      {
        ignoreNumericLiteralTypes: true,
        ignoreEnums: true,
        ignoreArrayIndexes: true,
        ignore: [-1, 0, 1]
      }
    ],
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      { allowNumber: true }
    ],
    'eslint-comments/disable-enable-pair': [
      'error',
      {
        allowWholeFile: true
      }
    ],
    'eslint-comments/no-aggregating-enable': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',
    'eslint-comments/no-use': [
      'error',
      {
        allow: [
          'eslint-disable',
          'eslint-disable-line',
          'eslint-disable-next-line',
          'eslint-enable',
          'global'
        ]
      }
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-default-export': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-self-import': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc'
        }
      }
    ],
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
        ignoreCase: true
      }
    ],
    'import/prefer-default-export': 'off',
    'functional/functional-parameters': 'off',
    'functional/no-conditional-statement': [
      'error',
      { allowReturningBranches: true }
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'functional/prefer-readonly-type': 'off', // TODO: waiting on https://github.com/typescript-eslint/typescript-eslint/pull/1513
    'functional/prefer-type-literal': 'off',
    'one-var': 'off',
    '@typescript-eslint/typedef': 'off',
    'no-ternary': 'off',
    'no-nested-ternary': 'off',
    'no-warning-comments': 'off'
  }
};
