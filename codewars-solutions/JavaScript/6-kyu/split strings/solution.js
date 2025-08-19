function solution(str) {
	const arr = str.match(/.{1,2}/g) || []
	if (arr.length > 0 && arr.at(-1).length === 1) arr[arr.length - 1] += '_'
	return arr
}

console.log(solution('abcdef'))
console.log(solution('abcdefg'))
console.log(solution(''))
