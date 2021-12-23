const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      throw new TypeError('promises must be array')
    }
    let count = 0;
    const result = [];
    promises.forEach((p, index) => {
      p.then((res) => {
        result[index] = res;
        count++;
        count === promises.length && resolve(result);
      }), (err) => {
        reject(err)
      }
    })
  })
}

const p1 = new Promise((resolve) => resolve(1));
console.log(p1)
const p2 = new Promise((resolve) => resolve(2));
const p3 = new Promise((resolve) => resolve(3));
const pp = [p1, p2, p2]
const step = async () => {
  const res = await promiseAll(pp);
  console.log('res', res)
  return res;
}
console.log(3333, step());



