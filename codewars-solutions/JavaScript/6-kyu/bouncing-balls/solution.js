function bouncingBall(h, bounce, window) {
	if (h < 0 || bounce <= 0 || bounce >= 1 || window > h) return -1
	let count = -1
	while (h > window) {
		h *= bounce
		count += 2
	}
	return count
}