const A = {
  a: 1,
  b: 2,
  c: {
    d: 4, f: [1, 2, 3], e: {
      f: 8
    }
  }
}


let map = new Map();
function deepClone(source) {
  if (map.has(source)) return map.get(source)
  if (typeof source === 'object' && source !== null) {
    let target = Array.isArray(source) ? [] : {};
    map.set(source, target)
    for (let key in source) {
      if (typeof source[key] === 'object') {
        target[key] = deepClone(source[key])
      } else {
        target[key] = source[key]
      }
    }
    return target
  } else {
    return source
  }
}
console.log(deepClone(A))
console.log(222, map)