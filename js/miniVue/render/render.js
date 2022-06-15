/**
 * 
 * @param {*} n1 oldVNode
 * @param {*} n2 newVnode
 * @param {*} container 挂载的节点element
 */
function patch(n1, n2, container) {
  if (n1 && n1.type !== n2.type) {
    unMounted(n1);
    n1 = null;
  }
  const { type } = n2;
  if (typeof type === 'string') {
    if (!n1) {
      // 代表挂载操作
      mountElement(n2, container);
    } else {
      // n1存在代表update,diff
      patchElement(n1, n2);
    }
  } else if (type === 'Text') {
    if (!n1) {
      const el = n2.el = createTextNode(n2.children);
      insert(el, container)
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        el.nodeValue = n2.children
      }
    }
  } else if (typeof type === 'object') {
    // 如果n2描述的是组件
  } else {
    // 其他类型vNode
  }
}

function patchElement(n1, n2) {
  const el = n2.el = n1.el;
  const oldProps = n1.props;
  const newProps = n2.props;
  // update props
  for (const key in newProps) {
    if (newProps[key] !== oldProps[key]) {
      patchProps(el, key, oldProps[key], newProps[key])
    }
  }
  for (const key in oldProps) {
    if (!(key in newProps)) {
      patchProps(el, key, oldProps[key], null)
    }
  }

  // update children
  patchChildren(n1, n2, el)
}

function patchChildren(n1, n2, container) {
  if (typeof n2.child === 'string') {
    // 文本节点且n1为数组
    if (Array.isArray(n1.children)) {
      n1.children.forEach((c) => unMounted(c))
    }
    setElementText(container, n2.children)
  } else if (Array.isArray(n2.children)) {
    if (Array.isArray(n1.children)) {
      // diff
      n1.children.forEach((c) => unMounted(c))
      n2.children.forEach((c) => patch(null, c, container))
    } else {
      setElementText(container, '');
      n2.children.forEach((c) => patch(null, c, container))
    }
  } else {
    // 新节点不存在
    if (Array.isArray(n1.children)) {
      n1.children.forEach(c => unMounted(c));
    } else if (typeof n1.children === 'string') {
      setElementText(container, '')
    }
  }
}

function mountElement(vNode, container) {
  // vnode demo
  // const vnode = {
  //   type: 'h1',
  //   props: {
  //     id: 'foo'
  //  },
  //   children: '我是vnode'
  // }

  function createElement(type) {
    return document.createElement(type)
  }

  function setElementText(el, text) {
    el.textContent = text
  }

  function insert(el, parent, anchor = null) {
    // 给指定的parent添加元素
    parent.insertBefore(el, anchor)
  }

  function shouldSetAsProp(el, key, value) {
    if (key === 'form' && el.tagName === 'INPUT') return false;
    return key in el;
  }

  function patchProps(el, key, prevValue, nextValue) {
    if (/^on/.test(key)) {
      //代表事件onXX
      const name = key.slice(2).toLowerCase();
      // 伪造事件处理函数invoker 提升性能, vue event invoker
      let invokers = el._vei || (el.vei = {});
      invoker = invokers[key];
      if (nextValue) {
        if (!invoker) {
          invoker = el.vei[key] = (e) => {
            if (e.timeStamp < invokers.attached) return
            // 例如可以绑定多个click事件
            if (Array.isArray(invoker.value)) {
              invoker.value.forEach((fn) => fn())
            } else {
              invoker.value(e);
            }
          }
          invoker.value = nextValue;
          invokers.attached = performance.now();
          el.addEventListener(name, invoker)
        } else {
          invoker.value = nextValue;
        }
      } else if (invoker) {
        // 无绑定事件，移除invoker
        el.removeEventListener(name, invoker)
      }
      el.addEventListener(name, nextValue)
    }
    if (shouldSetAsProp(el, key, nextValue)) {
      const type = typeof el[key];
      if (key === 'class') {
        el.className = nextValue || ''
      } else if (value === '' || type === 'boolean') {
        el[key] = true
      } else {
        el[key] = nextValue
      }
    } else {
      // 如果设置的属性没有dom properties，用setAttr
      el.setAttribute(key, nextValue)
    }
  }


  const el = vNode.el = createElement(vNode.type);
  if (typeof vNode.children === 'string') {
    setElementText(el, children)
  } else if (Array.isArray(vNode.children)) {
    vNode.children.forEach((child) => {
      patch(null, child, el)
    })
  }

  if (vNode.props) {
    for (const key in vNode.props) {
      patchProps(key, value, null, vNode.props[key])
    }
  }
  // container.appendChild(el)
  insert(el, container)
}

function unMounted(vNode) {
  const el = vNode.el;
  const parent = el.parentNode;
  if (parent) parent.removeChild(el)
}


function createRenderer() {
  function render(vnode, container) {
    if (vnode) {
      // 如果新旧node都存在，那么一起传递给patch
      patch(container._vnode, vnode, container)
    } else {
      if (container._vnode) {
        // 旧vnode存在，新的不存在，卸载
        // 拿到真实el
        unMounted(container._vnode)
      }
    }
    container._vnode = vnode;
  }
  return render
}