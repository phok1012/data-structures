// var Stack = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
// };

// var stackMethods = {};


var Stack = function() {
  var instance = Object.create(stackMethods)
    instance.storage = {}


  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.size() + 1] = value;
}

stackMethods.pop = function () {
  if(this.size() > 0) {
    var leaving = this.storage[this.size()];
    delete this.storage[this.size()];
    return leaving
  }
}

stackMethods.size = function () {
  return Object.keys(this.storage).length;
}