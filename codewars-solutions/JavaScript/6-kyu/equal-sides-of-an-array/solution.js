function findEvenIndex(arr) {
	return (
		arr.findIndex(
			(_, index) =>
				arr.slice(0, index).reduce((acc, curNum) => acc + curNum, 0) -
					arr.slice(index + 1).reduce((acc, curNum) => acc + curNum, 0) ==
				0
		) ?? -1
	)
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]))
console.log(findEvenIndex([8, 8]))

console.log(-2 && 1)
console.log(0 && 1)
