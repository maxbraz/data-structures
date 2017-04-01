

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this.retrieve(k) !== undefined) {
    var bucket = this._storage.get(index);

    if (bucket.length === 1 && bucket[0].get(0) === k) {
      bucket[0].set(1, v);
    } else {
      for (var i = 0; i < bucket.length; i++) {
        if (bucket[i].get(0) === k) {
          bucket[i].set(1, v);
        }
      }
    }
  } else {
    var tuple = LimitedArray(2);
    tuple.set(0, k);
    tuple.set(1, v);

    if (this._storage.get(index) === undefined) {
      var bucket = [];
      bucket.push(tuple);
      this._storage.set(index, bucket);
    } else {
      this._storage.get(index).push(tuple);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index) !== undefined) {
    var bucket = this._storage.get(index);
    if (bucket.length === 1 && bucket[0].get(0) === k) {
      return bucket[0].get(1);
    } else {
      for (var i = 0; i < bucket.length; i++) {
        if (bucket[i].get(0) === k) {
          return bucket[i].get(1);
        }
      }

      return undefined;
    }
  } else {
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this.retrieve(k) !== undefined) {
    var bucket = this._storage.get(index);
    if (bucket.length === 1 && bucket[0].get(0) === k) {
      bucket.splice(0);
    } else {
      for (var i = 0; i < bucket.length; i++) {
        if (bucket[i].get(0) === k) {
          bucket.splice(i, 1);
        }
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

retrieve, insert & remove: best case is when bucket has one tuple: O(1) constant
  worst case is when bucket has multiple tuples: O(n) linear
  
 */


