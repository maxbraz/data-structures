var Queue = function() {
  this.storage = {};
  this.len = 0;
  this.key = 0;
  this.firstInLine = 0;
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.key] = val;
  this.len++;
  this.key++;
};

Queue.prototype.dequeue = function() {
  var temp = this.storage[this.firstInLine];
  delete this.storage[this.firstInLine];
  this.firstInLine = this.firstInLine + 1;
  if (this.len > 0) {
    this.len--;
  }
  
  return temp;
};

Queue.prototype.size = function() {
  return this.len;
};