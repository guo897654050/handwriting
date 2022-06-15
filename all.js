// function all(promises) {
//   return new Promise((resolve, reject) => {
//     let count = 0;
//     let resArr = [];
//     for (let i = 0; i < promises.length; i++) {
//       p = promises[i];
//       p.then((res) => {
//         resArr[i] = res;
//         count++;
//         if (count === promises.length) {
//           resolve(resArr)
//         }
//       }).catch(e => {
//         reject(e)
//       })
//     }
//   })
// }
// let pp = [
//   Promise.resolve(111),
//   Promise.resolve(222),
//   // Promise.reject(333),
//   Promise.resolve(444),
// ]
// console.log(all(pp).then((res) => console.log(res)))

let p = [, Promise.reject(2), 3];
for (let i = 0; i < 3; i++) {
  console.log(p[i])
}