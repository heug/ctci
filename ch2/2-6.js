// Palindrome: Implement a function to check if a linked list is a palindrome

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

var palindromeCheck = function(list) {
	var current = list.head;
	var store = [];
	while (current) {
		store.push(current.value);
		current = current.next;
	}

	for (var i = 0; i < (store.length / 2); i++) {
		if (store[i] !== store[store.length - 1 - i]) {
			return false;
		}
	}

	return true;

}

var tester = new LinkedList();
tester.addToTail(9);
tester.addToTail(2);
tester.addToTail(3);
tester.addToTail(2);
tester.addToTail(9);
console.log(palindromeCheck(tester));
