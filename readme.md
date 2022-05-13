# eslint-config-bitauth

A very strict eslint configuration, including rules which require:

- a functional programming style
- properly-used eslint comments
- sorted and properly ordered imports
- properly formatted TSDoc comments
- strictly formatted code (prettier-compliant)
- nearly all eslint and @typescript-eslint rules

## Install

First, configure your project for [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint). Then install `eslint-config-bitauth` and the required plugins.

```
npm install --dev eslint @typescript-eslint/parser eslint-config-bitauth eslint-plugin-functional eslint-plugin-eslint-comments eslint-plugin-import eslint-plugin-tsdoc eslint-plugin-prettier
```

Then add `bitauth` to the `extends` array in your ESLint configuration.

Example `.eslintrc`:

```jsonc
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": { "project": "./tsconfig.json" },
  "env": { "es6": true },
  "ignorePatterns": ["node_modules", "build", "coverage"],
  "extends": ["bitauth"],
  "globals": { "BigInt": true, "WebAssembly": true },
  "rules": {
    // rule overrides:
    "example-rule": "off"
  }
}
```
