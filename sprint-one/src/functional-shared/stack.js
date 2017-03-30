var Stack = function() {
  var newStack = {};
  newStack.storage = {};
  newStack.len = 0;
  newStack.key = 0;
  newStack.firstInLine = 0;

  _.extend(newStack, stackMethods);

  return newStack;
};

stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.key] = value;
  this.firstInLine = this.key;
  this.key++;
  this.len++;
};

stackMethods.pop = function() {
  var temp = this.storage[this.firstInLine];
  delete this.storage[this.firstInLine];
  
  if (this.len > 0) {
    this.len--;
  }
  
  this.firstInLine = this.len - 1;

  return temp;
};

stackMethods.size = function() {
  return this.len;
};