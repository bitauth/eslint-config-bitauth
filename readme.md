# eslint-config-bitauth

A very strict eslint configuration, including rules which require:
- nearly all official eslint and @typescript-eslint rules
- a functional programming style
- properly-used eslint comments
- sorted and properly ordered imports
- strictly formatted code (prettier-compliant)

## Install

First, configure your project for [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint). Then install `eslint-config-bitauth` and the required plugins.

```
npm install --dev eslint @typescript-eslint/parser eslint-config-bitauth eslint-plugin-functional eslint-plugin-eslint-comments eslint-plugin-import
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