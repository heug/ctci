// 3.2 Stack Min: How would you design a stack which, in addition to push and pop, has a fn which returns the minimum element? Push, pop, and min should all operate in O(1) time.

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

var tester = new Stack();
tester.push(4);
tester.push(3);
tester.push(2);
tester.push(1);
console.log(tester.min());
console.log(tester.pop());
console.log(tester.min());