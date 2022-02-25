Object.prototype.map = function (cb) {
  const obj = this;
  const result = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const item = cb(key, obj[key]);
      result[key] = item;
    }
  }
  return result;
}

const test1 = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
};
const r1 = test1.map((key, value) => {
  if (value % 2 === 0) {
    return value / 2;
  }
  return value;
})
console.log(r1)