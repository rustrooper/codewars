function notPrimes(a, b) {
	const primeDigits = [2, 3, 5, 7]
	let result = []
	const isNotPrime = num => {
		if (num <= 1) return
		if (num <= 3) return false
		if (num % 2 === 0 || num % 3 === 0) return true

		for (let i = 5; i * i <= num; i += 6) {
			if (num % i === 0 || num % (i + 2) === 0) {
				return true
			}
		}
		return false
	}

	for (let i = a; i < b; i++) {
		if (
			String(i)
				.split('')
				.map(Number)
				.every(dig => primeDigits.includes(dig)) &&
			isNotPrime(i)
		)
			result.push(i)
	}

	return result
}