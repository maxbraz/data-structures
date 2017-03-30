var Queue = function() {
	var newQueue = Object.create(queueMethods);
	newQueue.storage = {};
	newQueue.len = 0;
	newQueue.firstInLine = 0;
	newQueue.key = 0;

	return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
	this.storage[this.key] = val;
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