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
    // question: 
    // 1. how to set up a simple code to pass 2nd and 3rd test spec here?
    // 2. why do we not use return before the recursion?
    // Your code here 
    let newNode = new TreeNode(val);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    if (val < currentNode.val) {
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


  search(val, currentNode = this.root) {
    // question: how do we refactor without currentNode?
    // Your code here 
    // if the tree is empty, return false;
    if (!currentNode) return false;

    // if 1+ nodes
    let newNode = new TreeNode(val);

    if (newNode.val === currentNode.val) return true;
    if (newNode.val < currentNode.val) {
      currentNode = currentNode.left;
      return this.search(val,currentNode);
    }
    if (newNode.val > currentNode.val) {
      currentNode = currentNode.right;
      return this.search(val,currentNode);
    }

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
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);

console.log(bst.search(1))//.to.be.true;
console.log(bst.search(2))//.to.be.true;
console.log(bst.search(3))//.to.be.true;
console.log(bst.search(4))//.to.be.true;
console.log(bst.search(5))//.to.be.true;
console.log(bst.search(6))//.to.be.true;
console.log(bst.search(7))//.to.be.true;