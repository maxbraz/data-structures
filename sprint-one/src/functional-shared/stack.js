var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },

  pop: function() {
    var temp = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    
    if (this.count > 0) {
      this.count--;
    }

    return temp;
  },

  size: function() {
    return this.count;
  }
};
