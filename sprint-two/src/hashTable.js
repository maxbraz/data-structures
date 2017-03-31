

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.searchBucket = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // make a variable bucket and set it to storage at index

  // if the bucket is not undefined
    // if the length of the bucket is one
      // return the value of what is in index zero of bucket at index one
    // or else if the length of the bucket is greater than one
      // iterate over the length of the bucket
        // if the value at index zero of each tuple is equal to k
          //return the value at index one of the tuple

    // return undefined;
  // or else 
    // return undefined

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
    // create a variable called 'tuple', an empty limitedArray
    // set index zero of tuple to be k(ey) and index one of tuple to be v(alue)

  // if element in storage at index is undefined
    // create a variable called 'bucket', an empty array
    // push tuple into bucket
    // push bucket into the storage array
  // or else
    // push tuple into storage array at the index
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  // make a variable bucket and set it to a new limited array

  // if the bucket is not undefined
    // if the length of the bucket is one
      // return the value of what is in index zero of bucket at index one
    // or else if the length of the bucket is greater than one
      // iterate over the length of the bucket
        // if the value at index zero of each tuple is equal to k
          //return the value at index one of the tuple

    // return undefined;
  // or else 
    // return undefined
  
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


