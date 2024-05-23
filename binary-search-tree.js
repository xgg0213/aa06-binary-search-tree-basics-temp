// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  toString() { // helper that can be used to print a simple tree to console for debugging, this is only readable for very short trees
    // [4:[2:[1:-,-],[3:-,-]],[6:[5:-,-],[7:-,-]]] looks like this
    let leftSub = this.left !== null ? this.left.toString() : "-";
    let rightSub = this.right !== null ? this.right.toString() : "-";
    return `[${this.val}:${leftSub},${rightSub}]`;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here 
    this.root = null;

    // question: do I need to set up this.left and this.right here as well?
    // this.left = null;
    // this.right = null;
  }

  insert(val, currentNode=this.root) {
    // Your code here 
    let newNode = new TreeNode(val);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    if (val < currentNode.val) {
      // question: how to set up a simple code to pass 2nd and 3rd test spec here?
      // currentNode = this.root.left;
      // this.insert(val, currentNode);
      if (!currentNode.left) {
        currentNode.left = newNode;
      } else {
        this.insert(val, currentNode.left)
      }
    } else {
      // currentNode = this.root.right;
      // this.insert(val, currentNode);
      if (!currentNode.right) {
        currentNode.right = newNode;
      } else {
        this.insert(val, currentNode.right)
      }
    }
  }


  search(val) {
    // Your code here 
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here 
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here 
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here 
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // Your code here 
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here 
  }
}

module.exports = { BinarySearchTree, TreeNode };

bst = new BinarySearchTree();
bst.insert(4);
console.log(bst.root.val);
bst.insert(2);

console.log(bst.root.val)//.to.equal(4);
console.log(bst.root.right)//.to.equal(null);

// let leftNode = bst.root.left;
// console.log(leftNode.val)//.to.equal(2);
// console.log(leftNode.left)//.to.equal(null);
// console.log(leftNode.right)//.to.equal(null);