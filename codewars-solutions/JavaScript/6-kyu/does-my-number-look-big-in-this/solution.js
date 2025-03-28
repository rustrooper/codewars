function narcissistic(value) {
	const digits = Array.from(String(value), Number)
	let summ = 0

	digits.forEach(digit => {
		summ += digit ** digits.length
	})

	return summ === value ? true : false
}