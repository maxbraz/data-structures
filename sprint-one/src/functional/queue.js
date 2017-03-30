var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var key = 1;
  var firstInLine = 1;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value;
    key++;
    length++;
  };

  someInstance.dequeue = function() {
    var temp = storage[firstInLine];
    delete storage[firstInLine];
    firstInLine ++;
    if (length !== 0) {
      length--;
    }
    return temp;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
