var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
    return value;
  };

  someInstance.pop = function() {
    var popVal = storage[count - 1];
    delete storage[count - 1];
    if (count > 0) {
      count--;
    }
    return popVal;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

// var stack = Stack();
// stack.push('a');
// console.log(stack.size());
// console.log(stack);

// stack.push('b');
// console.log(stack);
// console.log(stack.size());


// console.log(stack.pop());
// console.log(stack);

// console.log(stack.pop());
