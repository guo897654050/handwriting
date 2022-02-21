function throttle(fn, delay) {
  let timer = null;
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        console.log(333, args)
        fn.apply(this, args);
        timer = null;
      }, delay)
    }
  }
}

function sayHi(name, age) {
  console.log(name + age)
}

function throttle2(fn, delay) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.call(this, ...args);
        timer = null;
      }, delay)
    }
  }
}

function debounce(fn, delay) {
  let timer = null
  return function (args) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

throttle2(sayHi, 1000)("asda", "ads")