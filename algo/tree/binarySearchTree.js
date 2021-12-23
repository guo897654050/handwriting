class Node {
  constructor(key, left, right) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const node = new Node(key);
    if (!this.root) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    if (root.key > node.key) {
      if (root.left === null) {
        root.left = node
      } else {
        this.insertNode(root.left)
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right)
      }
    }
  }

  search(key) {
    const searchNode = (node, key) => {
      if (node === null) return false;
      if (node.key < key) {
        this.search(node, left, key)
      } else if (node.key > key) {
        this.search(node.right, key)
      } else {
        return true;
      }
    }
    return searchNode(this.root, key);
  }

  min() {
    if (!this.root) return null;
    let node = this.root;
    while (node.left) {
      node = node.left
    }
    return node.key
  }

  max() {
    if (!this.root) return null;
    let node = this.root;
    while (node.right) {
      node = node.right;
    }
    return node.key
  }

  inorderTraversal() {
    // 左中右
    const res = [];
    function inordertraversalNode(node, res) {
      if (node === null) return res;
      inrodertraversalNode(node.left);
      res.push(node.key);
      inrodertraversalNode(node.right);
    }
    inordertraversalNode(this.root, res)
    return res;
  }

  preorderTraversal() {
    const res = [];
    function preorderTraversal(node, res) {
      if (node === null) return res
      res.push(node.key)
      preorderTraversal(node.left)
      preorderTraversal(node.right)
    }
    preorderTraversal(this.root, res)
  }

  postorderTraversal() {
    const res = [];
    function preorderTraversal(node, res) {
      if (node === null) return res
      preorderTraversal(node.left)
      preorderTraversal(node.right)
      res.push(node.key)
    }
    preorderTraversal(this.root, res)
  }
}