// One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
// Ex: pale, ple -> true
// pale, bake -> false

var oneAway = function(str1, str2) {
	
	// Check flag for if one edit already done
	var flag = false;
	
	// Algo for equal lengths
	if (str1.length === str2.length) {
		for (var i = 0; i < str1.length; i++) {
			if (str1[i] !== str2[i]) {
				if (flag === true) {
					return false;
				}
				flag = true;
			}
		}
		return true;
	}

	// Algo for unequal lengths (remove and add)
	var long, short;
	str1.length > str2.length ? 
		(long = str1, short = str2) : 
		(long = str2, short = str1);

	// var longIdx, shortIdx;
	for (var i = 0; i < long.length; i++) {
		if (flag === true) {
			if (short[i - 1] !== long[i]) {
				return false;
			}
		}
		if (flag === false) {
			if (long[i] !== short[i]) {
				flag = true;
			}
		}
	}
	return true;
};

// console.log(oneAway('abcd', 'abced'));
// console.log(oneAway('abc', 'abed'));