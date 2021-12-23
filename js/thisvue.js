function noop(a, b, c) { }
const sharePropertyDefinition = {
  enumerable: true,
  consfigurable: true,
  get: noop,
  set: noop,
}

function proxy(target, sourceKey, key) {
  sharePropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key]
  }
  sharePropertyDefinition.set = function proxySetter(val) {
    return this[sourceKey][key] = val
  }

  Object.defineProperty(target, key, sharePropertyDefinition)
}

function initData(vm) {
  const data = vm._data = vm.$options.data;
  const keys = Object.keys(data);
  let i = keys.length;
  while (i--) {
    let key = keys[i];
    proxy(vm, '_data', key)
  }
}

function initMethod(vm, methods) {
  for (let key in methods) {
    vm[key] = typeof methods[key] !== 'function' ? noop : methods[key].bind(vm)
  }
}

function Person(options) {
  const vm = this;
  vm.$options = options;
  const opts = vm.$options;
  if (opts.data) {
    initData(vm)
  }
  if (opts.methods) {
    initMethod(vm, opts.methods)
  }
}

const p = new Person({
  data: {
    name: '若川'
  },
  methods: {
    sayName() {
      console.log(this.name);
    }
  }
});

console.log(p.name);
console.log(p.sayName());