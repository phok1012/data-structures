// var Queue = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
// };

// var queueMethods = {};

var Queue = function() {
  var instance = Object.create(queueMethods)
    instance.storage = {}
    instance.entered = 0
    instance.exited = 0


  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.entered ++;
  this.storage[this.entered] = value;
}

queueMethods.dequeue = function () {
  if(this.entered > this.exited) {
    this.exited ++
    var leaving = this.storage[this.exited];
    delete this.storage[this.exited];
    return leaving
  }
}

queueMethods.size = function () {
  return this.entered - this.exited
}
