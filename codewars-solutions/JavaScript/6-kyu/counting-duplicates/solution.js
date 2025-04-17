function duplicateCount(text) {
	let uniqueChars = {}
	for (const char of text.toLowerCase()) {
		if (Object.hasOwn(uniqueChars, char)) {
			uniqueChars[char] += 1
		} else {
			uniqueChars[char] = 1
		}
	}
	const duplicateCount = Object.values(uniqueChars).reduce((acc, value) => {
		return value >= 2 ? acc + 1 : acc
	}, 0)

	return duplicateCount
}