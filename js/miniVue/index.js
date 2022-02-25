class Observer {
  constructor(data) {
    this.data = data;
    this.walk(data)
  }
  walk(obj) {
    Object.keys(obj).forEach((key) => {
      this.defineReactive(obj, key)
    })
  }

  defineReactive(obj, key) {
    let dep = new Dep();
    let val = obj[key]
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        if (Dep.target) {
          dep.addDep(Dep.target);
        }
        return val
      },
      set(newVal) {
        if (newVal === val) {
          return
        }
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

  addDep(sub) {
    this.subs.push(sub)
  }

  notify() {
    this.subs.forEach((sub) => {
      sub.update();
    })
  }
}
Dep.target = null;


class Watcher {
  /**
   * 
   * @param {*} vm vue实例
   * @param {*} exp v-model="name" 即为name
   * @param {*} cb watcher的回调函数
   */
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
    const val = this.vm.data[this.exp];
    const oldVal = this.value;
    if (val !== oldVal) {
      this.cb.call(this, val, oldVal)
    }
  }

  get() {
    Dep.target = this;
    const value = this.vm.data[this.exp];
    Dep.target = null;
    return value
  }
}


class Compiler {
  constructor(el, vm) {
    this.vm = vm;
    this.el = document.querySelector(el);
    this.fragment = null;
    this.init();
  }

  init() {
    if (this.el) {
      this.fragment = this.node2Fragment(this.el);
      this.compilerElement(this.fragment);
      this.el.appendChild(this.fragment)
    } else {
      console.log('Dom 元素不存在！')
    }
  }

  node2Fragment(el) {
    const fragment = document.createDocumentFragment();
    let child = el.firstChild;
    while (child) {
      // 这里是move dom
      fragment.appendChild(child);
      child = el.firstChild
    }
    return fragment;

  }

  compilerElement(el) {
    const childNodes = el.childNodes;
    Array.from(childNodes).forEach((node) => {
      const reg = /\{\{(.*)\}\}/;
      const text = node.textContent;
      if (this.isElmentNode(node)) {
        // 对于指令的解析 v-model等
        this.compilerElementNode(node)
      } else if (this.isTextNode(node) && reg.test(text)) {
        this.compilerText(node, text.match(reg)[1])
      }
      if (node.childNodes && node.childNodes.length) {
        this.compilerElement(node)
      }
    })
  }

  compilerElementNode(node) {
    const nodeAttrs = node.attributes;
    Array.from(nodeAttrs).forEach((attr) => {
      const attrName = attr.name;
      if (this.isDirective(attrName)) {
        const exp = attr.value;
        const directive = attrName.substring(2);
        // v-on 事件指令
        if (this.isEventDirective(directive)) {
          this.compilerEvent(node, this.vm, exp, directive)
        } else {
          // v-model
          this.compilerModel(node, exp, directive)
        }
        node.removeAttribute(attrName)
      }
    })
  }

  compilerEvent(node, vm, exp, directive) {
    // v-on:click="xxx"
    const eventType = directive.split(':')[1];
    const cb = vm.methods && vm.methods[exp];
    if (eventType && cb) {
      node.addEventListener(eventType, cb.bind(vm), false)
    }
  }

  compilerText(node, exp) {
    const initText = this.vm[exp];
    // 赋上初始值
    this.updateText(node, initText);
    new Watcher(this.vm, exp, (val) => {
      this.updateText(node, val)
    })
  }

  compilerModel(node, exp, directive) {
    let val = this.vm[exp];
    this.modelUpdate(node, val);
    new Watcher(this.vm, exp, (val) => {
      this.modelUpdate(node, val)
    })
    node.addEventListener('input', (e) => {
      const newVal = e.target.value;
      if (val === newVal) return;
      this.vm[exp] = newVal;
      val = newVal
    })
  }

  modelUpdate(node, val, oldVal) {
    node.value = typeof val === 'undefined' ? '' : val
  }

  updateText(node, value) {
    node.textContent = typeof value === 'undefined' ? '' : value;
  }

  isDirective(name) {
    return name.indexOf('v-') === 0;
  }

  isElmentNode(node) {
    return node.nodeType === 1;
  }

  isTextNode(node) {
    return node.nodeType === 3;
  }


  isEventDirective(directive) {
    return directive.indexOf('on:') === 0
  }


}



class Vue {
  constructor(options) {
    this.data = options.data.call(this)
    this.methods = options.methods
    this.el = options.el;
    this.init();
  }

  init() {
    Object.keys(this.data).forEach((key) => {
      // 比如调用this.xx会直接去代理到this.data[exp]上
      this.proxyKey(key)
    })
    // 观察对象
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
        this.data[key] = newVal
      }
    })
  }


}