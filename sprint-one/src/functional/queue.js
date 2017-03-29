var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var counter = 1;
  var firstInLine = 1;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter ++;
    size ++;
  };

  someInstance.dequeue = function() {
    var temp = storage[firstInLine];
    delete storage[firstInLine];
    firstInLine ++;
    if (size !== 0) {
      size --;
    }
    return temp;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
