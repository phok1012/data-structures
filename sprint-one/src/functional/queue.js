var Queue = function() {
  var someInstance = {
  };
  let queued = 0;
  let dequeued = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    queued ++
    storage[queued] = value;
  };

  someInstance.dequeue = function() {
    if(dequeued < queued) {
      dequeued ++
      var dQing = storage[dequeued];
      delete storage[dequeued];
      return dQing;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
