const t = {
  a: 1,
  b: {
    c: {
      d: 2
    }
  },
  c: 2
}


function deepProxy(obj, handler) {
  if (typeof obj === 'object') {
    Object.keys(obj).forEach((key) => {
      obj[key] = deepProxy(obj[key], handler)
    })
    return new Proxy(obj, handler)
  }
  return obj
}

const handler = {
  get: function (target, key) {
    return target[key]
  }
}


const pp = deepProxy(t, handler)

