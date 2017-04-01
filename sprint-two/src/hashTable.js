

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // if hash table contains tuple with key 'k'
  if (this.retrieve(k) !== undefined) {
    var bucket = this._storage.get(index);

    if (bucket.length === 1 && bucket[0].get(0) === k) {
      bucket[0].set(1, v);
    } else {
      // access bucket located at index
      for (var i = 0; i < bucket.length; i++) {
        // if the value at index zero of each tuple is equal to k
        if (bucket[i].get(0) === k) {
          // overwrite value of tuple
          bucket[i].set(1, v);
        }
      }
    }
    // if hash table doesn't contain tuple with key 'k'
  } else {
    // create a variable called 'tuple', an empty limitedArray
    var tuple = LimitedArray(2);
    // set index zero of tuple to be k(ey) and index one of tuple to be v(alue)
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
      this._storage.get(index).push(tuple);
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
    if (bucket.length === 1 && bucket[0].get(0) === k) {
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

  // if hash table contains tuple with key 'k' (use .retrieve())
  if (this.retrieve(k) !== undefined) {
    // access bucket located at index
    var bucket = this._storage.get(index);
      // if bucket has length of 1
      if (bucket.length === 1 && bucket[0].get(0) === k) {
        // delete tuple at index 0
        bucket.splice(0);
      // or else
      } else {
        // iterate through bucket
        for (var i = 0; i < bucket.length; i++) {
          // if tuple has key 'k'
          if (bucket[i].get(0) === k) {
            // delete tuple
            bucket.splice(i, 1);
          }
        }
      }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


