module.exports = {
  plugins: ['import', 'eslint-comments', 'eslint-plugin-tsdoc', 'functional'],
  extends: [
    'eslint:all',
    'plugin:@typescript-eslint/all',
    'plugin:import/typescript',
    'plugin:functional/external-recommended',
    'plugin:functional/all',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'max-lines': ['error', 1000],
    'max-params': ['error', 3],
    complexity: ['error', 5],
    'max-statements': 'off',
    'max-lines-per-function': 'off',
    'default-case': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off', // deprecated in favor of @typescript-eslint/ban-ts-comment
    '@typescript-eslint/no-type-alias': 'off',
    'tsdoc/syntax': 'warn',
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
        ignore: [-1, 0, 1],
      },
    ],
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      { allowNumber: true },
    ],
    'eslint-comments/disable-enable-pair': [
      'error',
      {
        allowWholeFile: true,
      },
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
          'global',
        ],
      },
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
    'import/no-useless-path-segments': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'no-duplicate-imports': 'off',
    'import/no-duplicates': 'error',
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
        ignoreCase: true,
      },
    ],
    'import/prefer-default-export': 'off',
    'functional/functional-parameters': 'off',
    'functional/no-conditional-statement': [
      'error',
      { allowReturningBranches: true },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'functional/prefer-readonly-type': 'off', // disabled in favor of @typescript-eslint/prefer-readonly-parameter-types
    'functional/prefer-type-literal': 'off',
    'one-var': 'off',
    '@typescript-eslint/typedef': 'off',
    'no-ternary': 'off',
    'no-nested-ternary': 'off',
    'no-warning-comments': 'off',
    'no-loss-of-precision': 'off', // TODO: disabled for TS: https://github.com/typescript-eslint/typescript-eslint/issues/2076 - upgrade to https://github.com/typescript-eslint/typescript-eslint/pull/2196 when released
  },
};
