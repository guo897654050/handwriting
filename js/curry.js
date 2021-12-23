function curry(fn, len = fn.length) {
  return _curry.call(this, fn, len)
};

function _curry(fn, len, ...args) {
  return function (...params) {
    const _args = [...args, ...params];
    console.log(123213, _args)
    if (_args.length >= len) {
      return fn.apply(this, _args);
    } else {
      return _curry.call(this, fn, len, ..._args)
    }
  }
}

let fn = curry(function (a, b, c, d, e) {
  console.log(a, b, c, d, e)
})

fn(1, 2)(123)(3, 4, 5);