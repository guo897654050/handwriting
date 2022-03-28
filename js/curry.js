function sumFn(...args) {
  return args.reduce((prev, curr) => prev + curr, 0)
}


function curry(fn) {
  const args = [];
  return function result(...rest) {
    if (rest.length === 0) {
      return fn.apply(null, args)
    } else {
      args.push(...rest);
      return result
    }
  }
}

console.log(curry(sumFn)(1)(2)(2, 3, 33)())