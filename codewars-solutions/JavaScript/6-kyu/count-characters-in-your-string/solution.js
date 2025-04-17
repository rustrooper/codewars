function count(string) {
	let charObj = {}
	for (const char of string) {
		charObj[char] = (charObj[char] || 0) + 1
	}
	return charObj
}