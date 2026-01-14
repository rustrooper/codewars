function countSmileys(arr) {
	return arr.filter(str => str.match(/[:;][-~]?[)D]/)).length
}

console.log(countSmileys([':D', ':~)', ';~D', ':)']))
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))
console.log(countSmileys([]))
