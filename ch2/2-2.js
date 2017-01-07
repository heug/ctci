// Return kth to Last: Implement a function that returns the kth to last element in a singly linked list

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

var kthToLast = function(k, list) {
	var current = list.head;
	var counter = 1;
	while (current.next !== null) {
		counter++;
		current = current.next;
	}
	console.log('counter', counter);
	var kItem = counter - k;
	var iterate = list.head;
	while (kItem > 1) {
		iterate = iterate.next;
		kItem--;
	}
	return iterate.value;
};


// var tester = new LinkedList();
// tester.addToTail(1);
// tester.addToTail(2);
// tester.addToTail(3);
// tester.addToTail(4);
// console.log(tester);
// console.log(kthToLast(1, tester));