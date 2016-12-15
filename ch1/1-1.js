// Is Unique: Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures.
// Extra Credit: What if you cannot use additional data structures?

// Naive solution (with data storage)
var isUnique = function(str) {
  var store = [];
  for (var i = 0; i < str.length; i++) {
    if (store.indexOf(str[i]) > -1) {
      return false;
    }
    store.push(str[i]);
  }
  return true;
};

console.log(isUnique('abcd'));
console.log(isUnique('aaa'));

// Better solution (no data storage)

var isUnique = function(str) {
  for (var i = 0; i < str.length - 1; i++) {
    for (var j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
};

console.log(isUnique('abcd'));
console.log(isUnique('aaa'));

