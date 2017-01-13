// 3.3 Stack of plates

var Stack = function() {
	var store = {};
	var counter = 0;
	var minArr = [];
	
	this.push = function(val) {
		store[counter] = val;
		if (val < minArr[0] || minArr[0] === undefined) {
			minArr.unshift(val);
		};
		counter++;
	};

	this.pop = function() {
		counter--;
		var answer = store[counter];
		if (answer === minArr[0]) {
			minArr.shift();
		};
		delete store[counter];
		return answer;
	}

	this.size = function() {
		return counter;
	};

	this.min = function() {
		return minArr[0];
	};
}

var setOfStacks = function(maxSize) {
	var stackStore = {};
	var stackNum = 0;
	

}