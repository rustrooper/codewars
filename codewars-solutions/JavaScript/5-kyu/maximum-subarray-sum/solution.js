var maxSequence = function (arr) {
	let posArrIndexes = new Map()
	let firstIndex = false
	let subSum = 0
	let subSumMax = 0
	for (let i = 0; i < arr.length; i++) {
		if (subSum + arr[i] > 0) {
			if (subSum == 0) {
				firstIndex = i
			}
			subSum += arr[i]
			if (subSum > subSumMax) {
				subSumMax = subSum
				posArrIndexes.set(firstIndex, i)
			}
		} else {
			subSum = 0
			firstIndex = 0
		}
	}

	let maxSequence = 0

	for (const [key, value] of posArrIndexes.entries()) {
		const sequence = arr
			.slice(key, value + 1)
			.reduce((acc, num) => acc + num, 0)
		if (sequence > maxSequence) {
			maxSequence = sequence
		}
	}

	return maxSequence
}
