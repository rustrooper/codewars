function toCamelCase(str) {
	const regexp1 = /-/gi
	const result1 = str.replace(regexp1, '')
	console.log(result1)

	if (str === '') return ''

	const regexp = /[a-zA-Z]+/gi

	let result2 = str.match(regexp)
	result2 =
		result2[0] +
		result2
			.slice(1)
			.map(word => word[0].toUpperCase() + word.slice(1))
			.join('')
	console.log(result2)
}

toCamelCase('the-stealth-warrior')
