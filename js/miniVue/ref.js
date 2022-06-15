function reactive() {

}

function ref(val) {
  const wrapper = {
    value: val
  }
  return reactive(wrapper)
}

function toRef(obj, key) {
  const wrapper = {
    get value() {
      return obj[key]
    },
    set value(val) {
      obj[key] = val
    }
  }
  Object.defineProperty(wrapper, '__v_isRef', {
    value: true
  })
  return wrapper
}

function toRefs(obj) {
  const ret = {}
  Object.keys(obj).forEach((key) => {
    ret[key] = toRef(obj, key)
  })
  return ret
}

//setup返回的数据会交给proxyRef进行处理
function proxyRef(target) {
  return new Proxy(target, {
    get(target, key, recetive) {
      const value = Reflect.get(target, key, receiver);
      return value.__is_Ref ? value.value : value;
    },
    set(target, key, newValue, receiver) {
      const val = target[key];
      if (val.__v_isRef) {
        value.value = newValue;
        return true
      }
      return Reflect.set(target, key, newValue, receiver)
    }
  })
}