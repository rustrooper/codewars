function isPangram(string) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'
	const lowerString = string.toLowerCase()
	const uniqueLetters = new Set(lowerString.match(/[a-z]/g))

	return uniqueLetters.size === alphabet.length
}