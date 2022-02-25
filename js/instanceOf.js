function instanceOf(left, right) {
  let q = left.__proto__;
  while (q) {
    if (q === right.prototype) {
      return true
    }
    q = q.__proto__
  }
  return false
}

class animal {
  constructor(name) {
    this.name = name
  }
}

const a1 = new animal('baibai')

console.log(instanceOf(a1, Object))