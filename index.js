let timer = null;
function interval(func, delay) {
  let interFunc = function () {
    func.call(null);
    timer = setTimeout(interFunc, delay) // 递归调用
  }
  timer = setTimeout(interFunc, delay) // 触发递归
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
// 调用
interval(() => func(), 1000)
