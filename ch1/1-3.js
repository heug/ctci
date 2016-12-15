// URLify: WRite a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient
// space at the end to hold the additional characters, and that you are given the 'true' length of the string.


var urlify = function(str) {
  return str.trim().split(' ').join('%20');
};

