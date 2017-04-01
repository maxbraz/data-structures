

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
    // create a variable called 'tuple', an empty limitedArray
  var tuple = LimitedArray(2);
  // set index zero of tuple to be k(ey) and index one of tuple to be v(alue)
  
  if (this.retrieve(k) !== undefined) {
    var bucket = this._storage.get(index);

    for (var i = 0; i < bucket.length; i++) {
      // if the value at index zero of each tuple is equal to k
      if (bucket[i].get(0) === k) {
        //return the value at index one of the tuple
        bucket[i].set(1, v);
      }
    }
  } else {
    tuple.set(0, k);
    tuple.set(1, v);

  // if element in storage at index is undefined
    if (this._storage.get(index) === undefined) {
      // create a variable called 'bucket', an empty array
      var bucket = [];
      // push tuple into bucket
      bucket.push(tuple);
      // insert bucket into the storage array
      this._storage.set(index, bucket);
    // or else
    } else {
      // push tuple into bucket in storage array at the index
      this._storage.set(index, tuple);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  

  // if the bucket is not undefined
  if (this._storage.get(index) !== undefined) {
    // make a variable bucket and set it to an array
    var bucket = this._storage.get(index);
    // if the length of the bucket is one
    if (bucket.length === 1) {
      // return the value of what is in index zero of bucket at index one
      return bucket[0].get(1);
    // or else if the length of the bucket is greater than one
    } else {
      // iterate over the length of the bucket
      for (var i = 0; i < bucket.length; i++) {
        // if the value at index zero of each tuple is equal to k
        if (bucket[i].get(0) === k) {
          //return the value at index one of the tuple
          return bucket[i].get(1);
        }
      }

      // return undefined if key not found;
      return undefined;
    }

  // or else 
  } else {
    // return undefined
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
    // make a variable bucket and set it to storage at index

    // if the bucket is not undefined
    // if the length of the bucket is one
      // if the value of what is in index zero of bucket is equal to k
        // pop the tuple array out?
    // or else if the length of the bucket is greater than one
      // iterate over the length of the bucket
        // if the value at index zero of each tuple is equal to k
          //splice the tuple out of the bucket at that iteration index 
    // return undefined;
  // or else 
    // return undefined
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


