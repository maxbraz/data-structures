

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this) {
    if (node === parseInt(key)) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // delete edges associated with node
  
  if (this[node].length) {
    for (let edge of this[node]) {
      this.removeEdge(node, edge);
    }
  }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this[fromNode].includes(toNode) && this[toNode].includes(fromNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //if (this.hasOwnProperty(fromNode) && this.hasOwnProperty(toNode)) {
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);  
  //}
  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromNodeArr = this[fromNode];
  var toNodeArr = this[toNode];

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
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this, function(node) {
    cb.apply(this, node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 // add test for contains
 // add test for hasEdge
 // add test for if graph doesn't have node when addEdge/removeEdge is called


