'use strict';

const is = require('@sindresorhus/is');

const runFn = (fn, ...args) => {
  if (is.undefined(fn) || is.null(fn)) {
    return undefined;
  } else if (is.function(fn)) {
    return fn(...args);
  } else {
    throw new TypeError(`Expected a Function, got ${is(fn)}`);
  }
};

module.exports = runFn;
