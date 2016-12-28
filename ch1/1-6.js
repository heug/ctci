// String Compression: Implement a method to perform basic string compression using the counts of repeated chars. For example, the string aabcccccaaa would be come a2b1c5a3. If the compressed str would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a-z)

var strCompress = function(str) {
	var result = '';
	for (var i = 0; i < str.length; i++) {
		var counter = 1;
		var letter = str[i];
		while (str[i] === str[i + 1]) {
			counter++;
			i++;
		}
		result += letter + counter;
		counter = 1;
	}

	var answer = result.length > str.length ? str : result;

	return answer;
};

// console.log(strCompress('abc'));