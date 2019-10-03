# run-function

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Dependency Status](https://img.shields.io/david/m31271n/run-function.svg)](#)
[![DevDependency Status](https://img.shields.io/david/m31271n/run-function.svg)](#)
[![Travis Build Status](https://img.shields.io/travis/m31271n/run-function.svg)](#)
[![NPM Downloads](https://img.shields.io/npm/dm/run-function.svg)](#)

DEPRECATED: [@babel/plugin-proposal-optional-chaining](https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining) is an awesome replacement for this module.

> Run a function if it exists.

## Install

```
$ npm install run-function
```

## Usage

```js
const runFn = require('run-function')

function fn() {
  // do something
}

runFn(fn)
```

## API

### runFn(fn, ...args)

- when `fn` is `undefined` / `null`, do nothing;
- when `fn` is function, run `fn` with arguments `args`;
- when `fn` is not `undefined` / `null` / function, throw an error;
