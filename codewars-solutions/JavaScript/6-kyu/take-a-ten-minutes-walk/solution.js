function isValidWalk(walk) {
	if (walk.length != 10) {
		return false
	}

	let track = {
		x: 0,
		y: 0,
	}
	for (const step of walk) {
		switch (step) {
			case 'n':
				track.y++
				break
			case 's':
				track.y--
				break
			case 'w':
				track.x--
				break
			case 'e':
				track.x++
				break
		}
	}
	return track.x == 0 && track.y == 0
}