function duplicateEncode(word) {
	const lowerWord = word.toLowerCase()
	const charCount = {}
	let encodeWord = ''

	for (const char of lowerWord) {
		charCount[char] = (charCount[char] || 0) + 1
	}

	for (const char of lowerWord) {
		encodeWord += charCount[char] > 1 ? ')' : '('
	}

	return encodeWord
}