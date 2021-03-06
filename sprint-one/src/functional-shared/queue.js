var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.first = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.dequeue = function() {
  var temp = this.storage[this.firstInLine];
  delete this.storage[this.firstInLine];
  
  if (this.len > 0) {
    this.len--;
  }
  
  this.firstInLine++;

  return temp;
};

queueMethods.enqueue = function(value) {
  this.storage[this.first] = value;
  this.count++;
  this.first++;
};

queueMethods.dequeue = function() {
  var temp = this.storage[this.first - this.count];
  delete this.storage[this.first - this.count];
  if (this.count > 0) {
    this.count--;
  }
  return temp;
};

queueMethods.size = function() {
  return this.count;
};

