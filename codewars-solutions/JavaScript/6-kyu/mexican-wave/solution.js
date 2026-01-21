function wave(str) {
	let result = []

	if (str === '') return result

	for (let i = 0; i <= str.length - 1; i++) {
		if (str.charAt(i) == ' ') continue
		result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1))
	}

	return result
}

console.log(wave('hello'))
console.log(wave(' gap '))
console.log(wave(''))
