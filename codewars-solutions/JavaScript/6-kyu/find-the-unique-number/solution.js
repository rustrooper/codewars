function findUniq(arr) {
	let digitsCounter = new Map()
	arr.forEach(item => {
		digitsCounter.set(item, (digitsCounter.get(item) || 0) + 1)
	})
	for (let [key, value] of digitsCounter) {
		if (value === 1) return key
	}
}

console.log(findUniq([1, 1, 1, 2, 1, 1]))
console.log(findUniq([1, 0, 0]))
console.log(findUniq([0, 1, 0]))
console.log(findUniq([0, 0, 1, 0]))
