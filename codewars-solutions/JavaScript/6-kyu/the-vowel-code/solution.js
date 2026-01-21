const codes = {
	a: 1,
	e: 2,
	i: 3,
	o: 4,
	u: 5,
}

function encode(string) {
	for (const vowel in codes) {
		const regexp = new RegExp(vowel, 'g')
		string = string.replace(regexp, codes[vowel])
	}
	return string
}

function decode(string) {
	for (const vowel in codes) {
		const regexp = new RegExp(codes[vowel], 'g')
		string = string.replace(regexp, vowel)
	}
	return string
}

console.log(encode('hello'))
console.log(encode('How are you today?'))
console.log(decode('h2ll4'))
