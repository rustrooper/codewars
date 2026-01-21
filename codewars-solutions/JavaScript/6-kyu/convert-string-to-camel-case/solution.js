function toCamelCase(str) {
	const regexp1 = /-/gi
	const result1 = str.replace(regexp1, '')
	console.log(result1)

	const regexp2 = /^[a-zA-z]+$/
	const result2 = str.match()
}

toCamelCase('the-stealth-warrior')
