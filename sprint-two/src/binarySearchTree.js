var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  var newNode = new BinarySearchTree(value);

  var traverseTree = function(node) {
    // base case
    if (node.left === null && newNode.value < node.value) {
      node.left = newNode;
    } else if (node.right === null && newNode.value > node.value) {
      node.right = newNode;
    } else {
      // recursive case
      if (newNode.value < node.value) {
        traverseTree(node.left);
      } else {
        traverseTree(node.right);
      }
    }
  }

  traverseTree(this);
};

BinarySearchTree.prototype.contains = function(value) {

  var containsValue = false;

  var checkTreeForValue = function(node) {
    if (node.value === value) {
      containsValue = true;
    } else {
      if (value < node.value) {
        if (node.left !== null) {
          checkTreeForValue(node.left);
        }
      } else {
        if (node.right !== null) {
          checkTreeForValue(node.right);
        }
      }
    }
  }
  
  checkTreeForValue(this);
  return containsValue;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  var depthCharge = function(node) {

    callback(node.value);

    if (node.left !== null) {
      depthCharge(node.left);
    }

    if (node.right !== null) {
      depthCharge(node.right);
    }
  }

  depthCharge(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 // insert: O(logn) logarithmic
 // contains: O(logn) logarithmic
 // depthFirstLog: O(n) linear
 */
