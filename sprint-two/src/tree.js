var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);  
};

treeMethods.contains = function(target) {
  var result = false;

  var searchTree = function(node) {
    if (node.value === target) {
      result = true;
    } 

    if (node.children && node.children.length > 0) {
      _.each(node.children, function(child) {
        searchTree(child);
      });
    }
  };

  searchTree(this);

  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 addChild O(1) constant
 contains O(c^n) exponential
 */
