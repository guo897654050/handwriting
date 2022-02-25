async function func1() {
  console.log(111)
}

async function func2() {
  await sleep()
  console.log(222)
}

async function func3() {
  console.log(3333)
}

async function sleep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 3000)
  })
}

// Array.prototype.myForEach = async function (callback, thisArg) {
//   const _thisArg = thisArg ? Object(thisArg) : null;
//   for (let i = 0; i < this.length; i++) {
//     await callback.call(_thisArg, this[i], i, this)
//   }
// }
Array.prototype.myForEach = async function (cb, thisArg) {
  // cb是匿名异步函数
  const _thisArg = thisArg ? thisArg : null;
  for (let i = 0; i < this.length; i++) {
    await cb.call(_thisArg, this[i])
  }
}


let funcArr = [func1, func2, func3];

async function all(funcArr) {
  funcArr.myForEach(async (fn) => await fn())
}

all(funcArr)



// promise
let promise = Promise.resolve();
function test(i = 0) {
  if (i === funcArr.length) return;
  promise = promise.then(() => funcArr[i])
  test(i + 1)
}

test()


