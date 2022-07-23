var Stack = function() {
  this.storage = {}
}
Stack.prototype.push = function(value) {
  this.storage[this.size() + 1] = value;
}
Stack.prototype.pop = function() {
  if(this.size() > 0) {
    var leaving = this.storage[this.size()];
    delete this.storage[this.size()];
    return leaving;
  }

}
Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
}

