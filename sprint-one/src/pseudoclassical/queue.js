var Queue = function() {
  this.storage = {};
  this.entered = 0;
  this.exited = 0;
};

Queue.prototype.enqueue = function(value) {
  this.entered ++;
  this.storage[this.entered] = value;
}

Queue.prototype.dequeue = function() {
  if(this.entered > this. exited) {
    this.exited ++;
    var leaving = this.storage[this.exited];
    delete leaving;
    return leaving;
  }
}

Queue.prototype.size = function() {
  return this.entered - this.exited;
}

var Actualqueue = new Queue();