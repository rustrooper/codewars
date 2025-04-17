function validBraces(braces) {
	function searchPair(brace, index) {
		for (let j = index + 1; j < braces.length; j += 2) {
			if (brace == braces[j]) return true
		}
		return false
	}
	let leftBraces = 0
	for (let i = 0; i <= braces.length; i++) {
		switch (braces[i]) {
			case '(':
				leftBraces++
				if (!searchPair(')', i)) return false
				break
			case '[':
				leftBraces++
				if (!searchPair(']', i)) return false
				break
			case '{':
				leftBraces++
				if (!searchPair('}', i)) return false
				break
		}
	}
	return leftBraces == braces.length / 2
}