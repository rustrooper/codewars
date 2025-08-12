function digitalRoot(n) {
	let digits_sum = 0
	while (n > 0) {
		digits_sum += n % 10
		n = Math.trunc(n / 10)
	}
	if (digits_sum / 10 >= 1) {
		return digitalRoot(digits_sum)
	} else {
		return digits_sum
	}
}