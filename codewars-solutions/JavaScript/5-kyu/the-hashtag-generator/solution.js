function generateHashtag(str) {
	if (str.trim().length == 0) return false
	let newString =
		'#' +
		str
			.trim()
			.split(' ')
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join('')
	return newString.length > 140 ? false : newString
}