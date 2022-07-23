var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  let count = 0;
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    count ++;
    storage[count] = value;
  };

  someInstance.pop = function() {
    if (count > 0) {
      var leaving = storage[count];
      delete storage[count];
      count --;
      return leaving
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
