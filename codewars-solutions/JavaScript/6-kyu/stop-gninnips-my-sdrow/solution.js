function spinWords(string) {
	const wordsArr = string.match(/\b\w+\b/g)
	let resultArr = ''
	for (let i = 0; i < wordsArr.length; i++) {
		const word = wordsArr[i]
		if (word.length >= 5) {
			let reversedWord = ''
			for (let j = word.length - 1; j >= 0; j--) {
				reversedWord += word[j]
			}
			resultArr += reversedWord + ' '
		} else {
			resultArr += word + ' '
		}
	}
	return resultArr.trim()
}