var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      var previousTail = list.tail;
      list.tail.next = Node(value);
      list.tail = list.tail.next;
      list.tail.previous = previousTail;
    }
  };

  list.addToHead = function(value) {
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      var previousHead = list.head;
      list.head = Node(value);
      list.head.next = previousHead;
      previousHead.previous = list.head;
    }
  }

  list.removeTail = function() {
    var removedTail = list.tail;
    if (list.tail !== null) {
      list.tail = list.tail.previous;
      list.tail.next = null;
    }

    return removedTail.value;
  }

  list.removeHead = function() {
    var removedHead = list.head;
    if (list.head !== null) {
      list.head = list.head.next;
      if(list.head)
      list.head.previous = null;
    }
    return removedHead.value;
  };

  list.contains = function(target) {
    var temp = list.head;
    while (temp.next !== null) {
      if (temp.value === target) {
        return true;
      }
      temp = temp.next;
    }
    if (list.tail.value === target) {
      return true;
    }
      return false;
  };



  return list;
};

var Node = function(value) {
  var node = {};

  node.previous = null;
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
