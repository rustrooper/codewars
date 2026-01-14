function wave(str) {
	if (str === '') return ''

	let result = []
	for (let i = 0; i <= str.length - 1; i++) {
		if (str.charAt(i) != ' ') {
			result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1))
		}
	}

	return result
}

console.log(wave('hello'))
