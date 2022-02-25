// var flat = function (arr, depth) {
//   let res = [],
//     depthArg = depth || 1,
//     depthNum = 0,
//     flatMap = (arr) => {
//       arr.map((element, index, array) => {
//         if (Object.prototype.toString.call(element).slice(8, -1) === 'Array') {
//           if (depthNum < depthArg) {
//             depthNum++;
//             flatMap(element);
//           } else {
//             res.push(element);
//           }
//         } else {
//           res.push(element);
//           if (index === array.length - 1) depthNum = 0;
//         }
//       });
//     };
//   flatMap(arr);
//   return res;
// };

function flat(arr, deep) {
  return deep > 0 ?
    arr.reduce((prev, curr) => {
      return prev.concat(Array.isArray(curr) ? flat(curr, deep - 1) : curr)
    }, [])
    : arr.slice()
}



let a = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, [0, 12]]]]
console.log(flat(a, Infinity))



