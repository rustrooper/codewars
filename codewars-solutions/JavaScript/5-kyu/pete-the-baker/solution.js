function cakes(recipe, available) {
	let counter = Infinity

	Object.entries(recipe).forEach(([key, value]) => {
		counter = available[key] ? Math.min(counter, available[key] / value) | 0 : 0
	})

	return counter
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))
