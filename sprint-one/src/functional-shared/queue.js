var Queue = function() {
  var newQueue = {};
  newQueue.storage = {};
  newQueue.len = 0;
  newQueue.key = 0;
  newQueue.firstInLine = 0;

  _.extend(newQueue, queueMethods);

  return newQueue;
};

queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.key] = value;
  this.key++;
  this.len++;
};

queueMethods.dequeue = function() {
  var temp = this.storage[this.firstInLine];
  delete this.storage[this.firstInLine];
  
  if (this.len > 0) {
    this.len--;
  }
  
  this.firstInLine++;

  return temp;
};

queueMethods.size = function() {
  return this.len;
};

