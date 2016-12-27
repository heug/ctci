// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.

var palPerm = function(str) {
  var word = str.split(' ').join('');
  var store = {};
  for (var i = 0; i < word.length; i++) {
  	if (store[word[i]]) {
  		store[word[i]]++;
  	} else {
  		store[word[i]] = 1;
  	}
  }

  if (word.length % 2 === 0) {
  	for (var key in store) {
  		if (store[key] % 2 === 1) {
  			return false;
  		}
  	}
  } else {
  	var oddValue = false;
  	for (var key in store) {
  		if (store[key] % 2 === 1) {
  			if (oddValue) {
  				return false;
  			}
  			oddValue = true;
  		}
  	}
  }
  return true;
}


console.log(palPerm('taco cat'));