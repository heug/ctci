// Remove Dups: Write code to remove duplicates from an unsorted linked list.
// How would you solve this problem if a temp buffer is not allowed?

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

var removeDupes = function(list) {
  var store = {};
  var current = list.head;
  while (current !== null) {
    if (store[current.value]) {
      list.removeNode(current.value);
    } else {
      store[current.value] = true;
    }
    current = current.next;
  }
  return list;
};

// var tester = new LinkedList();
// tester.addToTail(1);
// tester.addToTail(1);
// tester.addToTail(2);
// tester.addToTail(2);
// // tester.addToTail(4);
// console.log(tester);
// removeDupes(tester);
// console.log(tester);