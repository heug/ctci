// Check Permutation: Given two strings, write a method to decide if one
// is a permutation of the other.

var checkPerm = function(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  var a = str1.split('').sort().join('');
  var b = str2.split('').sort().join('');
  
  if (a === b) {
    return true;
  } else {
    return false;
  
  }
};

console.log(checkPerm('bca','cba'));
