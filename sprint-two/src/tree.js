var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  return _.extend(newTree, treeMethods);
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
  child.parent = this;
};

treeMethods.contains = function(target) {
  var results = false;

  var helper = function(parent) {
    if (results === true) {
      return;
    }
    if (parent.value === target) {
      results = true;
      return;
    } else if (parent.children.length > 0) {
      parent.children.forEach(function(child) {
        helper(child);
      });
    }
  }

  helper(this);
  return results;
};

treeMethods.removeFromParent = function() {
  // var parent = this.parent;
  var me =
  // use map to grab all the childrens value
  // use indexof on the transformed array
  this.parent.children.splice(indexOf(me), 1);
  this.parent = null;
}

// treeMethods.findChild = function() {

// }



/*
 * Complexity: What is the time complexity of the above functions?
 */

// var parentTree =
//
//
//
//