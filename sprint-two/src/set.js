var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  for (var key in this._storage) {
    if (this._storage[key] === item) {
      return true;
    }
  }

  return false;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
  add O(1) constant
  contains O(n) linear
  remove O(1) constant
 */