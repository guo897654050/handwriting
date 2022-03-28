// key

function insert(el, parent, anchor) {
  parent.insertBefore(el, anchor)
}
function patch(p1, p2, p3, p4) {
}

function umount(VNode) {

}

function pathChildren(n1, n2, container) {
  if (typeof n2.children === 'string') {
    // ...
  } else if (Array.isArray(n2.children)) {
    // 找到索引最大值
    let lastIndex = 0;
    const newChildren = n1.children;
    const oldChildren = n2.children;
    for (let i = 0; i < newChildren.length; i++) {
      const newChild = newChildren[i];
      // 代表是否发现可复用节点
      let find = false;
      for (let j = 0; j < oldChildren.length; j++) {
        const oldChild = oldChildren[j];
        if (newChild.key === oldChild.key) {
          find = true;
          // 这里有个patch操作，用于更新textNode content
          if (j < lastIndex) {
            // 说明需要移动了，先找了lastindex，说明已经遍历过
            // ------
            // 先找到新node的prevNode
            const prevNode = newChildren[i - 1];
            // 如果prevNode不存在，说明是第一个节点
            if (prevNode) {
              // 获取其下一个兄弟节点
              const anchor = prevNode.el.nextSibling;
              // newNode.el代表节点的dom
              insert(newNode.el, container, anchor)
            }
          } else {
            //update max lastIndex
            lastIndex = j;
          }
          break; // remove unusable for cycle
        }
      }
      if (!find) {
        const prevNode = newChildren[i - 1];
        let anchor = null;
        if (prevNode) {
          anchor = prevNode.nextSibling;
        } else {
          anchor = container.firstNode;
        }
        // 挂载newVNode
        patch(null, newVNode, container, anchor)
      }
    }
    // 这里判断是否需要删除旧的无用节点
    for (let i = 0; i < oldChildren.length; i++) {
      const oldVNode = oldChildren[i];
      const has = newChildren.find((node) => node.key === oldVNode.key)
      if (!has) {
        unMount(oldVNode)
      }
    }
  }
}