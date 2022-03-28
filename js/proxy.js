const data = {
  a: 1,
  b: 2,
  c: 3
}

const tmpData = [1, 2, 3, 4,]
const pp = new Proxy(tmpData, {
  get(target, key) {
    console.log(key, 'get methods trigger!');
    return target[key]
  },
  set(target, key, newVal) {
    console.log('set method trigger!')
    if (newVal !== target[key]) {
      target[key] = newVal
    }
    return target[key]
  }
})

// pp[0] = '33333'
pp.unshift(9999)
console.log(pp)
