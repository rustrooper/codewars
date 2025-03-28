function findOutlier(integers) {
	let evenCount = 0
	let oddCount = 0
	let lastEven, lastOdd

	for (const num of integers) {
		if (num % 2 === 0) {
			evenCount++
			lastEven = num
		} else {
			oddCount++
			lastOdd = num
		}

		if (evenCount > 1 && oddCount === 1) {
			return lastOdd
		}
		if (oddCount > 1 && evenCount === 1) {
			return lastEven
		}
	}
}