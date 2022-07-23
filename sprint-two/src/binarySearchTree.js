var BinarySearchTree = function(value) {
  var instance = {};
  instance.value = value;
  instance.left;
  instance.right;

  return _.extend(instance, BinaryTreeMethods);

};

var BinaryTreeMethods = {};

BinaryTreeMethods.insert = function(value) {

  var incomingTree = BinarySearchTree(value);
  var currentTree = this;

  if (incomingTree.value > currentTree.value) {
    if (currentTree.right) {
      currentTree.right.insert(value);
    } else {
      currentTree.right = incomingTree;
    }
  } else {
    if (currentTree.left) {
      currentTree.left.insert(value);
    } else {
      currentTree.left = incomingTree;
    }
  }
};

BinaryTreeMethods.contains = function(value) {
  var currentTree = this;

  if (value === currentTree.value) {
    return true;
  }
  if (value > currentTree.value) {
    if (currentTree.right) {
      return currentTree.right.contains(value);
    }
  } else if (currentTree.left) {
      return currentTree.left.contains(value);
    }

  return false;
};


BinaryTreeMethods.depthFirstLog = function(func) {
  func(this.value);

  if (this.left) {
    this.left.depthFirstLog(func);
  }
  if (this.right) {
    this.right.depthFirstLog(func);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
