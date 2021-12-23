const sleep = (func, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(func())
    }, delay)
  })
}

const sayhi = () => {
  console.log('hhhhhh')
}
const doFn = async () => {
  await sleep(sayhi, 1000)
}
doFn();
