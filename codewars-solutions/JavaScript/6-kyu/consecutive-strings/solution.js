function longestConsec(strarr, k) {
	let strarr_length = strarr.length
	let longest_word = ''
	if (strarr_length == 0 || k > strarr_length || k <= 0) return ''
	for (let i = 0; i <= strarr_length - k; i++) {
		const concat_word = strarr.slice(i, i + k).join('')
		if (concat_word.length > longest_word.length) longest_word = concat_word
	}
	return longest_word
}