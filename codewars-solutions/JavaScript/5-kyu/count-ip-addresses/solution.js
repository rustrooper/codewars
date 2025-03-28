function ipsBetween(start, end) {
	const parseIp = ip => ip.split('.').map(Number)
	const startArr = parseIp(start)
	const endArr = parseIp(end)
	let diff = 0
	for (let i = 0; i < startArr.length; i++) {
		diff += (startArr[i] - endArr[i]) * 256 ** (startArr.length - i - 1)
	}
	return Math.abs(diff)
}