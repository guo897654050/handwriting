function interval(fn, delay) {
  function inner() {
    let timer = setTimeout(() => {
      fn();
      clearTimeout(timer);
      inner();
    }, delay)
  }
  inner();
}

const func = () => {
  console.log(123)
}

interval(func, 1000)