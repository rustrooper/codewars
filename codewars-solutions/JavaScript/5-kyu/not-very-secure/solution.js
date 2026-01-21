function alphanumeric(string) {
	return /^[a-z0-9]+$/i.test(string)
}

console.log(alphanumeric('Mazinkaiser'))
console.log(alphanumeric('    '))
console.log(alphanumeric('hello world_'))
