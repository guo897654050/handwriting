class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(root, node) {
    if (node.val < root.val) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node)
      }
    } else {
      if (root.right === null) {
        root.right = node
      } else {
        this.insertNode(root.right, node)
      }
    }
  }

  // 先序遍历根左右
  preorderTraversal() {
    const res = [];
    function preorderTraversalNode(node, res) {
      if (node === null) return res;
      res.push(node.val)
      preorderTraversalNode(node.left, res);
      preorderTraversalNode(node.right, res);
    }
    preorderTraversalNode(this.root, res);
    return res
  }

  // 中序遍历左根右
  inorderTraversal() {
    const res = [];
    function inorderTraversalNode(node, res) {
      if (node === null) return res;
      inorderTraversalNode(node.left, res);
      res.push(node.val)
      inorderTraversalNode(node.right, res);
    }
    inorderTraversalNode(this.root, res);
    return res
  }

  // 后序遍历
  postorderTraversal() {
    const res = [];
    function postorderTraversalNode(node, res) {
      if (node === null) return res;
      postorderTraversalNode(node.left, res);
      postorderTraversalNode(node.right, res);
      res.push(node.val)
    }
    postorderTraversalNode(this.root, res);
    return res;
  }

  min() {
    if (!this.root) return null;
    let node = this.root;
    while (node.left) {
      node = node.left;
    }
    return node.val
  }

  max() {
    if (!this.root) return null;
    let node = this.root;
    if (node.right) {
      node = node.right;
    }
    return node.val
  }

  search(key) {
    function searchNode(node, key) {
      if (node === null) return false;
      if (key < node.val) {
        return searchNode(node.left, key)
      } else if (key > node.val) {
        return searchNode(node.right, key)
      } else {
        return true
      }
    }
    return searchNode(this.root, key)
  }

  bfs() {
    const queue = [this.root];
    const res = [];
    while (queue.length) {
      const len = queue.length;
      for (let i = 0; i < len; i++) {
        const node = queue.shift();
        if (node) {
          res.push(node.val)
          if (node.left) {
            queue.push(node.left)
          }
          if (node.right) {
            queue.push(node.right)
          }
        }
      }
    }
    return res
  }

  dfs() {

  }
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(11);
binarySearchTree.insert(7);
binarySearchTree.insert(5);
binarySearchTree.insert(3);
binarySearchTree.insert(9);
binarySearchTree.insert(8);
console.log(binarySearchTree);
console.log('前序遍历', binarySearchTree.preorderTraversal());
console.log('中序遍历', binarySearchTree.inorderTraversal());
console.log('后序遍历', binarySearchTree.postorderTraversal());
console.log('层序遍历', binarySearchTree.bfs());
console.log('二叉搜索树最小节点', binarySearchTree.min())
console.log('二叉搜索树最大节点', binarySearchTree.max())
console.log('二叉搜索树搜索', binarySearchTree.search(3))


