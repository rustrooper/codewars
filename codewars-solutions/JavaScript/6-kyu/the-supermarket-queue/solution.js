function queueTime(customers, n) {
	let timeAmount = 0
	while (customers.length > 0) {
		const subArrN = customers.slice(0, n)
		const minSubElem = Math.min(...subArrN)
		timeAmount += minSubElem
		for (let i = 0; i < subArrN.length; i++) {
			customers[i] -= minSubElem
		}
		customers = customers.filter(num => num != 0)
	}
	return timeAmount
}