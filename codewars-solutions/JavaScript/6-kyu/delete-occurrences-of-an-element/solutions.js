function deleteNth(arr, n) {
	const numCounter = {}
	const result = []
	for (let i = 0; i <= arr.length - 1; i++) {
		if (!numCounter[arr[i]]) numCounter[arr[i]] = 0
		if (numCounter[arr[i]] != n) {
			numCounter[arr[i]]++
			result.push(arr[i])
		}
	}
	return result
}

console.log(deleteNth([20, 37, 20, 21], 1))
