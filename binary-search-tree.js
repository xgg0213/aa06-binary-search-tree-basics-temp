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
      if (!currentNode.left) {
        currentNode.left = newNode;
      } else {
        return this.insert(val, currentNode.left) // eith with or without return works, it may slow down execution time, but scale is uncertain
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
      } else {
        return this.insert(val, currentNode.right)
      }
    }
  }

  // question: why this one does not work?
  // insert(val, currentNode=this.root) {
  //   // Your code here 
  //   let newNode = new TreeNode(val);
  //   if (!this.root) {
  //     this.root = newNode;
  //     return;
  //   }


  //   if (!currentNode) {
  //     currentNode = newNode;
  //     return;
  //   }
  //   // need to further look at this
  //   if (val < currentNode.val && currentNode !== null) {
  //     currentNode = currentNode.left;
  //     this.insert(val, currentNode);
  //   } else if (val > currentNode.val && currentNode !== null) {
  //     currentNode = currentNode.right;
  //     this.insert(val, currentNode);
  //   }
  // }

  // option 1: with currentNode set up
  search(val, currentNode = this.root) {
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

  // option 2: without currentNode
  // search(val) {
  //   // Your code here 
  //   // if the tree is empty, return false;
  //   if (!this.root) return false;

  //   // if 1+ nodes
  //   let currentNode = this.root;
  //   while (currentNode) {
  //     if (currentNode.val === val) return true;
  //     if (val < currentNode.val) {
  //       currentNode = currentNode.left;
  //     } else if (val > currentNode.val) {
  //       currentNode = currentNode.right;
  //     }
  //   }
  //   return false;
  // }

  preOrderTraversal(currentNode = this.root) {
    // Your code here 
    if (!currentNode) return;

    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);

  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here 
    if (!currentNode) return;

    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here 
    if (!currentNode) return;

    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // Your code here 
    // initialize a queue with the root node
    let queue = [this.root];

    // while the queue is not empty
    while (queue.length) {
      // print and remove first node in queue
      let el = queue.shift();
      console.log(el.val);

      // if the node has a left node
      if (el.left) {
        // push the left node on the back of the queue
        queue.push(el.left);
      }
      // if the node has a right node
      if (el.right) {
        // push the right node on the back of the queue
        queue.push(el.right)
      }
    }
      
    return;
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here 
    // initialize a stack with the root node
    let stack = [this.root];
    // while the stack is not empty
    while (stack.length) {
      // print and remove first node in stack
      let el = stack.pop();
      console.log(el.val);

      // if the node has a left node
      if (el.left) {
        // push the left node on the back of the stack
        stack.push(el.left)
      }
      // if the node has a right node
      if (el.right) {
        // push the right node on the back of the stack
        stack.push(el.right)
      }
    }
  return; 
 }
}

// question: the reason why breadth and depth uses queue & stack is due to their own characteristics: FIFO vs. LIFO, right?

module.exports = { BinarySearchTree, TreeNode };

// bst = new BinarySearchTree();
// bst.insert(4);
// bst.insert(2);
// bst.insert(6);
// bst.insert(1);
// bst.insert(3);
// bst.insert(5);
// bst.insert(7);

// console.log(bst.search(1))//.to.be.true;
// console.log(bst.search(2))//.to.be.true;
// console.log(bst.search(3))//.to.be.true;
// console.log(bst.search(4))//.to.be.true;
// console.log(bst.search(5))//.to.be.true;
// console.log(bst.search(6))//.to.be.true;
// console.log(bst.search(7))//.to.be.true;