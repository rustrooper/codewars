function sortEmotions(arr, order) {
    const priority = {
		':D': 4,
		':)': 3,
		':|': 2,
		':(': 1,
		T_T: 0,
	}

	return arr.sort((a, b) =>
		order ? priority[b] - priority[a] : priority[a] - priority[b]
	)
}