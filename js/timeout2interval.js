function interval(fn, delay) {
  function inner() {
    let timer = setTimeout(() => {
      fn();
      // clearTimeout(timer);
      inner();
    }, delay)
  }
  inner();
}

function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
}
const func = async () => {
  await sleep();
  console.log(123)
}

interval(func, 1000)