var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var counter = 1;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    counter ++;
    size ++;
  };

  someInstance.pop = function() {
    var temp = storage[counter - 1];
    delete storage[counter];
    counter --;
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

