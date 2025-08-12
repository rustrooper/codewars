function alphabetPosition(text) {
	const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	let newText = ''

	for (char of text) {
		let charIndex = alphabet.indexOf(char.toLowerCase())
		if (charIndex >= 0) newText += `${charIndex + 1} `
	}
	return newText.trim()
}