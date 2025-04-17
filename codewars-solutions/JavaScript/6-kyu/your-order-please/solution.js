function order(str) {
	const findNum = word => word.match(/[1-9]/)
	let newString = str
		.split(' ')
		.sort((a, b) => Number(findNum(a)[0]) - Number(findNum(b)[0]))
		.join(' ')
	return newString
}