var Stack = function() {
	var newStack = Object.create(stackMethods);
	newStack.storage = {};
	newStack.key = 0;
	newStack.len = 0;
	newStack.firstInLine = 0;

	return newStack;
};

var stackMethods = {};

stackMethods.push = function(val) {
	this.storage[this.key] = val;
	this.firstInLine = this.key;
	this.key++;
	this.len ++;
};

stackMethods.pop = function() {
	var temp = this.storage[this.firstInLine];
	delete this.storage[this.firstInLine];

	if (this.len > 0) {
		this.len --;
	}

	this.firstInLine = this.firstInLine - 1;

	return temp;
};

stackMethods.size = function() {
	return this.len;
};