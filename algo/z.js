const str = 'paypalishiring'
const process = (str, row) => {
  const res = [];
  for (let i = 0; i < row; i++) {
    res[i] = '';
  }
  let flag = -1;
  let i = 0;
  for (let s of str) {
    res[i] += s;
    if (i === 0 || i === row - 1) flag = -flag;
    i += flag;
  }
  console.log(res)
}
console.log(process(str, 3))