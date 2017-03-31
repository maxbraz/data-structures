

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.storage) {
    if (node === parseInt(key)) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // delete edges associated with node
  if (this.storage[node].length) {
    for (let edge of this.storage[node]) {
      this.removeEdge(node, edge);
    }
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.storage[fromNode].includes(toNode) && this.storage[toNode].includes(fromNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.storage[fromNode] && this.storage[toNode]) {
    this.storage[fromNode].push(toNode);
    this.storage[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //if (this.storage.hasOwnProperty(fromNode) && this.storage.hasOwnProperty(toNode)) {
    var fromNodeArr = this.storage[fromNode];
    var toNodeArr = this.storage[toNode];

    for (var i = 0; i < fromNodeArr.length; i++) {
      if (fromNodeArr[i] === toNode) {
        fromNodeArr.splice(i, 1);
      }
    }

    for (var j = 0; j < toNodeArr.length; j++) {
      if (toNodeArr[j] === fromNode) {
        toNodeArr.splice(j, 1);
      }
    }
  //}
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(Object.keys(this.storage), function(node) {
    return cb(parseInt(node));
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode: O(1) constant
 contains: O(n) linear
 removeNode: O(n) linear
 hasEdge: O(n) linear
 addEdge: O(1) constant
 removeEdge: O(n) linear
 forEachNode: O(n) linear [possible O(n^2) quadratic, depending on the callback]
 */

 // add test for if graph doesn't have node when addEdge/removeEdge is called


