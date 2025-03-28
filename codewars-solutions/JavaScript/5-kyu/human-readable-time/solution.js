function humanReadable(totalSeconds) {
	const hours = Math.floor(totalSeconds / 3600)
	const remainingSeconds = totalSeconds % 3600
	const minutes = Math.floor(remainingSeconds / 60)
	const seconds = remainingSeconds % 60

	return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}