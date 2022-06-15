function debounce(fn, delay) {
  let timer = null;
  return (...args) => {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay)
  }
}

function sayHi() {
  console.log('hihihhi');
}

const bb = debounce(sayHi, 4000);
bb(123, 456);
