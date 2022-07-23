

// Instantiate a new graph
var Graph = function() {
  this.nodeStorage = [];
  this.edgeStorage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodeStorage.push(node);
  this.edgeStorage[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodeStorage.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    this.nodeStorage = this.nodeStorage.filter(function(value) {
      return value !== node;
    });
    var connections = Object.keys(this.edgeStorage[node]);
    for (var connectedNode of connections) {
      this.removeEdge(connectedNode, node);
    }

    delete this.edgeStorage[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.contains(fromNode)) {
    if (this.edgeStorage[fromNode][toNode]) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    this.edgeStorage[fromNode][toNode] = true;
    this.edgeStorage[toNode][fromNode] = true;
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.edgeStorage[fromNode]) {
    delete this.edgeStorage[fromNode][toNode];
    delete this.edgeStorage[toNode][fromNode];
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodeStorage.forEach(function(node) {
    return cb(node);
  })
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


