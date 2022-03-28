function insert(el, parent, anchor) {
  parent.insertBefore(el, anchor)
}
function patch(oldVNode, newVNode, container) {
  // update textContent
}

function unount(VNode) {

}

function pathChildren(n1, n2, container) {
  if (typeof n2.children === 'string') {
    // ...
  } else if (Array.isArray(n2.children)) {
    // const oldChildren = n1.children;
    // const newChildren = n2.children;
    pathKeyChildren(n1, n2, container)
  } else {
    // ...
  }
}



function pathKeyChildren(n1, n2, container) {
  const oldChildren = n1.children;
  const newChildren = n2.children;
  let oldStartIdx = 0;
  let oldEndIdx = oldChildren.length - 1;
  let newStartIdx = 0;
  let newEndIdx = newChildren.length - 1;
  // 四个索引分别指向vnode节点
  let oldStartVNode = oldChildren[oldStartIdx];
  let oldEndVNode = oldChildren[oldEndIdx];
  let newStartVNode = newChildren[newStartIdx];
  let newEndVNode = new children[newEndIdx];
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    // 前置条件，由于一开始不满足四个条件导致额外的判断逻辑
    if (!oldStartVNode) {
      oldStartVNode = oldChildren[++oldStartIdx]
    } else if (!oldEndVNode) {
      oldEndVNode = oldChildren[--oldEndIdx]
    } else if (oldStartVNode.key = newStartVNode.key) {
      patch(oldStartVNode, newStartVNode, container);
      oldStartVNode = oldChildren[++oldStartIdx];
      newStartVNode = newChildren[++newStartIdx]
    } else if (oldEndVNode.key === newEndVNode.key) {
      patch(oldEndVNode, newEndVNode, container);
      // update index
      oldEndVNode = oldChildren[--oldEndIdx];
      newEndVNode = newChildren[--newEndIdx];
    } else if (oldStartVNode.key === newEndVNode.keyy) {
      patch(oldStartVNode, newEndVNode, container);
      insert(oldStartVNode.el, container, oldEndVNode.el.nextSibling);
      oldStartVNode = oldChildren[++oldStartIdx];
      newEndVNode = newChildren[--oldEndIdx];
    } else if (oldEndVNode.key === newStartVNode.key) {
      // 说明要把旧节点的最后一个移动到最前面，将oldEndIdx指向的虚拟节点移动的oldStartIdx的虚拟节点的前面
      // update textContent
      patch(oldEndVNode, newStartVNode, container);
      // 移动dom操作
      insert(oldEndVNode.el, container, oldStartVNode.el);
      // 移动完毕 更新索引值
      oldEndVNode = oldChildren[--oldEndIdx]
      newStartVNode = newChildren[++newStartIdx]
    } else {
      // 不满足上述理想情况
      const idxInOld = oldChildren.findIndex((node) => {
        node.key = newStartVNode.key
      })
      // 可以发现复用节点
      if (idxInOld > 0) {
        const vnodeToMove = oldChildren[idxInOld];
        patch(vnodeToMove, newStartVNode, container);
        insert(vnodeToMove.el, container, oldStartVNode.el);
        oldChildren[idxInOld] = undefined;
        newStartVNode = newChildren[++newStartIdx]
      }
    }
  }
  // 对于新增节点的处理
  if (oldEndIdx < oldStartIdx && newStartIdx <= newEndIdx) {
    for (let i = newStartIdx; i < newEndIdx; i++) {
      // 都是新插入节点
      patch(newChildren[i], container, oldStartVNode.el)
    }
  } else if (newEndIdx < newStartIdx && oldStartIdx <= oldEndIdx) {
    for (let i = oldStartIdx; i <= oldEndIdx; i++) {
      unmount(oldChildren[i])
    }
  }


}