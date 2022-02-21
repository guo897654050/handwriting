// 实现一个observer，用来观察data的数据
class Observer {
  constructor(data) {
    this.data = data;
    this.walk(this.data)
  }

  walk(data) {
    Object.keys(data).forEach((key) => {
      this.defineReactive(data, key)
    })
  }

  defineReactive(obj, key) {
    let dep = new Dep();
    let val = obj[key];
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        if (Dep.target) {
          dep.addSub(Dep.target)
        }
        return val;
      },
      set(newVal) {
        if (val === newVal) {
          return
        }
        val = newVal;
        dep.notify();
      }
    })
  }
}

// 实现一个集中收集的依赖。
class Dep {
  constructor() {
    this.subs = [];
  }

  addSub(sub) {
    this.subs.push(sub)
  }

  notify() {
    // sub本身是一个Watcher
    this.subs.forEach((sub) => {
      sub.update();
    })
  }
}
Dep.target = null;

// 观察者本身
class Watcher {
  /**
   * 
   * @param {*} vm vue实例
   * @param {*} exp v-model="name"  name
   * @param {*} cb callback
   */
  constructor(vm, exp, cb) {
    this.vm = vm;
    this.exp = exp;
    this.cb = cb;
    // 强制触发get方法添加watcher自身到dep
    this.value = this.get();
  }

  update() {
    let oldVal = this.value;
    let newVal = this.vm[this.exp];
    if (oldVal !== newVal) {
      this.cb.call(this, newVal, oldVal)
    }
  }

  get() {
    Dep.target = this;
    // 到时候访问this.vm的属性都要代理到this.vm.data
    const value = this.vm[this.exp];
    Dep.target = null;
    return value
  }
}

class Compiler {
  constructor(el, vm) {
    this.el = document.querySelector(el);
    this.vm = vm;
    this.fragment = null;
    this.init();
  }

  init() {
    this.fragment = this.node2fragment(this.el);
    this.compilerElement(this.fragment);
    this.el.appendChild(this.fragment)
  }

  node2fragment(el) {
    let fragment = document.createDocumentFragment();
    let child = el.firstChild;
    while (child) {
      fragment.appendChild(child);
      child = el.firstChild
    }
    return fragment;
  }

  compilerElement(el) {
    const childNodes = el.childNodes;
    Array.from(childNodes).forEach((node) => {
      const reg = /\{\{(.*)\}\}/;
      const content = node.textContent;
      if (this.isTextNode(node) && reg.test(content)) {
        this.compilerText(node, content.match(reg)[1])
      }
      if (node.childNodes && node.childNodes.length) {
        this.compilerElement(node)
      }
    })
  }

  compilerText(node, exp) {
    let value = this.vm[exp];
    this.updatetext(node, value)
    new Watcher(this.vm, exp, (val) => {
      this.updatetext(node, val)
    })
  }

  updatetext(node, value) {
    node.textContent = value === undefined ? '' : value;
  }

  isTextNode(node) {
    return node.nodeType === 3;
  }
}


class Vue {
  constructor(options) {
    this.data = options.data.call(this);
    this.el = options.el;
    this.init();
  }

  init() {
    Object.keys(this.data).forEach((key) => {
      this.proxyKey(key)
    })
    new Observer(this.data);
    new Compiler(this.el, this)
  }

  proxyKey(key) {
    Object.defineProperty(this, key, {
      enumerable: true,
      configurable: true,
      get() {
        return this.data[key]
      },
      set(newVal) {
        this.data[key] = newVal;
      }
    })
  }
}