var Stack = function() {
  var instance = {
    storage: {},
  }

  return _.extend(instance, stackMethods);
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



