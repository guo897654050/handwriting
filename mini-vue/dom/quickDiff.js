function patch(oldNode, newNode, container) { }
function unmount(el) { }
function lis(source) { }

function patchKeyedChildren(n1, n2, children) {
  const newChildren = n2.children;
  const oldChildren = n1.children;
  let j = 0;
  let oldNode = oldChildren[j];
  let newNode = newChildren[j];
  // 更新相同的前置节点
  while (oldNode.key === newNode.key) {
    patch(oldNode, newNode, container)
    j++;
    oldNode = oldChildren[j];
    newNode = newChildren[j]
  }

  // 更新后置节点
  let oldEnd = oldChildren.length - 1;
  let newEnd = newChildren.length - 1;
  oldNode = oldChildren[oldEnd];
  newNode = newChildren[newEnd];
  while (oldNode.key === newNode.key) {
    patch(oldNode, newNode, container);
    oldEnd--;
    newEnd--;
    oldNode = oldChildren[oldEnd];
    newNode = newChildren[newEnd];
  }

  // 判断新增节点
  if (j > oldEnd && j <= newEnd) {
    // j- newEnd之间就是新增节点
    // 锚点索引
    const anchorIndex = newEnd + 1;
    const anchor = anchorIndex < newChildren.length ? newChildren[anchorIndex].el : null;
    while (j <= newEnd) {
      patch(null, newChildren[j++], container, anchor)
    }
  } else if (j > newEnd && j <= oldEnd) {
    // 卸载旧节点
    while (j <= oldEnd) {
      unmount(oldChildren[j++])
    }
  } else {
    const count = newEnd - j + 1;
    // 用于记录新的节点在旧dom的索引
    const source = new Array(count).fill(-1);
    let oldStart = j;
    let newStart = j;
    let moved = false;
    let pos = 0;
    const keyIndex = {};
    for (let i = newStart; i <= newEnd; i++) {
      keyIndex[newChildren[i].key] = i
    }
    // 代表更新过的节点数量
    let patched = 0;
    for (let i = oldStart; i <= oldEnd; i++) {
      const oldNode = oldChildren[i];
      if (patch <= count) {
        const k = keyIndex[oldNode.key];
        if (typeof k !== 'undefined') {
          const newNode = newChildren[k];
          patch(oldNode, newNode, container);
          patched++
          source[k - newStart] = i;
          if (k < pos) {
            moved = true;
          } else {
            pos = k
          }
          if (moved) {
            // 存的是索引
            const seq = lis(source);
            // s指向最长递增子序列的最后
            let s = seq.length - 1;
            // i指向新的节点的最后
            let i = count - 1;
            for (i; i >= 0; i--) {
              if (source[i] === -1) {
                // 新节点需要挂载
                const pos = i + newStart;
                const newNode = newChildren[pos];
                // 因为统一用insertBefore插入节点
                const nextPos = pos + 1;
                const anchor = nextPos < newChildren ? newChildren[nextPos].el : null;
                patch(null, newNode, container, anchor)
              } else if (i !== seq[s]) {
                const pos = i + newStart;
                const newNode = newChildren[pos];
                const nextPos = pos + 1;
                const anchor = nextPos < newChildren.length ? newChildren[nextPos].el : null;
                insert(newNode.el, container, anchor)
              } else {
                s--;
              }
            }
          }
        } else {
          unmount(oldNode)
        }
      } else {
        unmount(oldNode)
      }
    }
  }


}