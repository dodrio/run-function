import test from 'ava';
import runFn from '../src';

test('is undefined or null', t => {
  const fn1 = null;
  t.is(runFn(fn1), undefined);

  const fn2 = undefined;
  t.is(runFn(fn2), undefined);
});

test('is other types except undefined / null / function', t => {
  const fn = 'not function';
  const err = t.throws(() => runFn(fn), TypeError);
  t.is(err.message, 'Expected a Function, got string');
});

test('is function && accepts one argument', t => {
  function fn(args) {
    return args;
  }

  const args = 'arg';
  t.deepEqual(runFn(fn, args), args);
});

test('is function && accepts multiple arguments', t => {
  function fn(...args) {
    return args;
  }

  const args = ['arg1', 'arg2', 'arg3', 'arg4'];
  t.deepEqual(runFn(fn, ...args), args);
});
