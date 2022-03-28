function resolvePromise(promise2, x, resolve, reject) {
  if (x === promise2) {
    return reject(new TypeError('Chaining cycle detected for promise'));
  }
  let called = false;
  if (typeof x === 'object' && x !== null || typeof x === 'function') {
    try {
      let then = x.then;
      if (typeof then === 'function') {
        then.call(x, (y) => {
          if (called) return;
          called = true;
          resolvePromise(promise2, y, resolve, reject)
        }, (r) => {
          if (called) return;
          called = true;
          reject(r)
        })
      } else {
        resolve(x)
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e)
    }
  } else {
    resolve(x)
  }
}

class MyPromise {
  constructor(executor) {
    this.value = undefined;
    this.reason = undefined;
    this.status = 'pending';

    this.onFulfilledCb = [];
    this.onRejectedCb = [];

    const resolve = (value) => {
      if (this.status = 'pending') {
        this.status = 'fulfilled';
        this.value = value;
        this.onFulfilledCb.forEach(fn => fn())
      }
    }

    const reject = (reason) => {
      if (this.status = 'pending') {
        this.status = 'rejected';
        this.reason = reason;
        this.onRejectedCb.forEach(fn => fn())
      }
    }

    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }



  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }
    let promise2 = new MyPromise((resolve, reject) => {
      if (this.status === 'fulfilled') {
        setTimeout(() => {
          let x = onFulfilled(this.value)
          resolvePromise(promise2, x, resolve, reject)
        })
      }

      if (this.status === 'rejected') {
        setTimeout(() => {
          let x = onRejected(this.reason)
          resolvePromise(promise2, x, resolve, reject)
        })
      }

      if (this.status === 'pending') {
        setTimeout(() => {
          this.onFulfilledCb.push(() => {
            let x = onFulfilled(this.value);
            resolve(promise2, x, resolve, reject)
          })

          this.onRejectedCb.push(() => {
            let x = onRejected(this.reason)
            resolve(promise2, x, resolve, reject)
          })
        })

      }
    })
    return promise2
  }
}


const P1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('dddddata')
  })
}).then((res) => console.log(res))