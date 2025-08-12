function inArray(array1, array2) {
	return array1
		.filter(substring => array2.some(string => string.includes(substring)))
		.sort()
}