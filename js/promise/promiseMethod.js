const p1 = Promise.resolve('success');
const p2 = Promise.resolve('成功');
const p3 = Promise.reject('failed');

function race(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((p) => {
      p.then((res) => {
        resolve(res)
      }, err => {
        reject(err)
      })
    })
  })
}

race([p3, p1, p2]).then((res) => {
  console.log('from race -->', res)
}).catch((e) => {
  console.log('from race -->', e)
})



function all(promises) {
  return new Promise((resolve, reject) => {
    let count = 0;
    const len = promises.length;
    let result = [];
    promises.forEach((p, index) => {
      p.then((res) => {
        count++
        result[index] = res
        if (count === len) {
          resolve(result)
        }
      }, (err) => reject(err))
    })
  })
}

all([p3, p1, p2]).then((res) => {
  console.log('from all -->', res)
}).catch((e) => {
  console.log('from all -->', e)
})


function allSettled(promises) {
  let result = []
  let count = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((p, i) => {
      p.then((res) => {
        result[i] = { status: 'fulfilled', value: res }
      }, err => {
        result[i] = { status: 'rejected', value: err }
      }).finally(() => {
        count++
        if (count === promises.length) {
          resolve(result)
        }
      })
    })
  })
}

allSettled([p1, p2, p3]).then((res) => {
  console.log('from allsettled -->', res)
})


function any(promises) {
  let count = 0;
  let result = []
  return new Promise((resolve, reject) => {
    promises.forEach((p, i) => {
      p.then((res) => {
        resolve(res)
      }).catch(e => {
        count++;
        result[i] = e;
        if (count === promises.length) {
          reject(result)
        }
      })
    })
  })
}



const p4 = Promise.reject('failed4');
const p5 = Promise.reject('failed5');
const p6 = Promise.reject('failed6');


Promise.any([p4, p5, p6]).then((res) => {
  console.log('from any -->', res)
}).catch(e => {
  console.log('from any -->', e)
})



