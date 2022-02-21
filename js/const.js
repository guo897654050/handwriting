function _const(key, value) {
  window[key] = value
  Object.defineProperty(window, key, {
    enumerable: false,
    configurable: false,
    get: function () {
      return value
    },
    set: function (newValue) {
      if (newValue !== value) {
        throw TypeError('这是只读变量，不可修改')
      } else {
        return value
      }
    }
  })
}

function outputNum(count) {
  //块级作用域
  (function () {
    for (var i = 0; i < count; i++) {
      console.log(i)
    }
  })()
  console.log(i)
}
outputNum(5)

