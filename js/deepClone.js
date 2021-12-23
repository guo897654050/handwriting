function deepClone(source) {
  if (typeof source !== 'object') return
  const target = Array.isArray(source) ? [] : {}
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      if (typeof source[key] === 'object') {
        target[key] = deepClone(source[key])
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}

const a = { a: { c: 12, d: [1, 2, { c: 123 }] }, b: 2 }
console.log(deepClone(a))