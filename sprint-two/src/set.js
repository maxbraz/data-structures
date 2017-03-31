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
  var result = false;

  _.each(this._storage, function(str) {
    if (str === item) {
      result = true;
    }
  });

  return result;
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
