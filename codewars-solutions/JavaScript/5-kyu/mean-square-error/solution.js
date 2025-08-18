const solution = function (firstArray, secondArray) {
	let arrSum = 0
	for (let i = 0; i <= firstArray.length - 1; i++) {
		arrSum += Math.abs(firstArray[i] - secondArray[i]) ** 2
	}
	return arrSum / firstArray.length
}