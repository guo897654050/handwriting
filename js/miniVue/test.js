class Observer {
  constructor(data) {
    this.data = data;
    this.walk(data);
  }
  walk(data) {
    Object.keys(data).forEach((key) => {
      this.defineReactive(key, data)
    })
  }

  defineReactive(key, data) {
    let val = data[key];
    let dep = new Dep();
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        if (Dep.target) {
          dep.addSub(dep)
        }
        return val;
      },
      set(newVal) {
        if (val === newVal) return;
        val = newVal;
        dep.notify();
      }
    })
  }
}

class Dep {
  constructor() {
    this.subs = [];
  }

  addSub(sub) {
    this.subs.push(sub)
  }

  notify() {
    this.subs.forEach((fn) => fn.update())
  }
}
Dep.target = null;


class Watcher {
  constructor(vm, exp, cb) {
    this.vm = vm;
    this.exp = exp;
    this.cb = cb;
    this.value = this.get();
  }

  update() {
    this.run();
  }

  run() {
    let newVal = this.vm.data[exp];
    let oldVal = this.value;
    if (newVal !== this.value) {
      this.cb.call(this, newVal, oldVal)
    }
  }

  get() {
    Dep.target = this;
    let val = this.vm.data[exp];
    Dep.target = null;
    return val;
  }
}