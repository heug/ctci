// Sum lists: You ahve two #s represented by a linked list, where each node contains a single
// digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list
// Write a fn that adds the 2 numbers and returns the sum as a linked list.

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var LinkedList = function() {
  var list = {};

  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    this.tail = node;
    if (!this.head) {
      this.head = node;
    } else {
      var current = this.head
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
  };

  list.removeHead = function() {
    var val = this.head.value;
    var newHead = this.head.next;
    this.head = newHead;
    return val;
  };

  list.removeNode = function(val) {
    var current = this.head;
    while (current !== null) {
      if (current.next.value === val) {
        var removed = current.next.value;
        if (this.tail === current.next) {
          this.tail = current;
        }
        current.next = current.next.next;
        return removed;
      }
      current = current.next;
    }
    return undefined;
  }

  return list;
};

var sumLists = function(a, b) {
	var currentA = a.head;
	var currentB = b.head;
	var tens = 1;
	var answer = 0;

	while (currentA || currentB) {
		answer += ((currentA ? currentA.value : 0) + (currentB ? currentB.value : 0)) * tens;
		tens *= 10;
		currentA = currentA.next;
		currentB = currentB.next;
	}

	return answer;

};


var tester = new LinkedList();
tester.addToTail(9);
tester.addToTail(2);
tester.addToTail(3);
tester.addToTail(4);
var tester2 = new LinkedList();
tester2.addToTail(9);
tester2.addToTail(2);
tester2.addToTail(3);
tester2.addToTail(4);

console.log(sumLists(tester, tester2));
