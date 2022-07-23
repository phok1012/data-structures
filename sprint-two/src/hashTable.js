

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var dupExist = false;

  if (bucket) {
    for (var tuple of bucket) {
      if (tuple[0] === k) {
        tuple[1] = v;
        dupExist = true;
      }
    }
    if (!dupExist) {
      bucket.push([k, v]);
    }
  } else {
    bucket = [[k, v]];
  }
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var tuple of bucket) {
      if (tuple[0] === k) {
        return tuple[1];
      }
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var tuple of bucket) {
      if (tuple[0] === k) {
        bucket.splice(bucket.indexOf(tuple), 1);
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


