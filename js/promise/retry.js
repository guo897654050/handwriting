Promise.retry = function (fn, times = 3) {
  return new Promise(async (resolve, reject) => {
    while (times) {
      try {
        const res = await fn();
        resolve(res);
        break;
      } catch (err) {
        if (!times) {
          reject(err)
        }
      }
      times -= 1;
    }
  })
}

function test() {
  const n = Math.random();
  return new Promise((resolve, reject) => {
    if (n > 0.7) {
      resolve(n)
      console.log('当前值大于0.7 -->', n)
    } else {
      console.log('当前值小于0.7 -->', n)
      reject(n)
    }
  })
}

Promise.retry(test)

