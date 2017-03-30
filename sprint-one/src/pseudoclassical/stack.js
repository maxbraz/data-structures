var Stack = function() {
  this.storage = {};
  this.len = 0;
  this.key = 0;
  this.firstInLine = 0;
};

Stack.prototype.push = function(val) {
  this.storage[this.key] = val;
  this.firstInLine = this.key;
  this.key++;
  this.len++;
};

Stack.prototype.pop = function() {
  var temp = this.storage[this.firstInLine];
  delete this.storage[this.firstInLine];
  
  this.firstInLine = this.firstInLine - 1;
  

  if (this.len > 0) {
    this.len--;
  }

  return temp;
};

Stack.prototype.size = function() {
  return this.len;
};