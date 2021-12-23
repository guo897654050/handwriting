function throttle(fn, delay) {
  let timer = null;
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, delay)
    }
  }
}

function sayHi() {
  console.log(123123)
}

throttle(sayHi, 3000)