function solution(number) {
	let summ = 0
	for (i = 1; i < number; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			summ += i
		}
	}
	return summ
}