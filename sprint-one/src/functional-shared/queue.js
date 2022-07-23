var Queue = function() {
  var instance = {
    storage: {},
    entered: 0,
    exited: 0
  }

  return _.extend(instance, queueMethods);
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
