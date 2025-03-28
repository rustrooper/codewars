function arrayDiff(a, b) {
	const filteredStrict = a.filter(x => b.every(y => x != y))
	return filteredStrict
}