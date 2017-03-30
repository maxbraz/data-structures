var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var first = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[first] = value;
    count++;
    first++;
  };

  someInstance.dequeue = function() {
    var temp = storage[first - count];
    delete storage[0];

    if (count > 0) {
      count--;
    }

    return temp;
  };

  someInstance.size = function() {
    return count;
  };
};