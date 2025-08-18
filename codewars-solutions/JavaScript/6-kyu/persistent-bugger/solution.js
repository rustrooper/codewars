function persistence(num) {
	if (num < 10) return 0
	let summ = 1
	while (num > 0) {
		summ *= num % 10
		num = Math.trunc(num / 10)
	}
	return summ >= 10 ? persistence(summ) + 1 : 1
}