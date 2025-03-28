function findArr(A, B, rng, wanted) {
	const [min, max] = rng // Извлекаем min и max из массива rng

	// Функция для подсчета количества вхождений каждого элемента в массиве
	function countOccurrences(arr) {
		const counts = {}
		for (const num of arr) {
			if (num >= min && num <= max) {
				counts[num] = (counts[num] || 0) + 1
			}
		}
		return counts
	}

	function checkWanted(wanted) {
		return wanted === 'even'
			? num => {
					return num % 2 === 0
			  }
			: wanted === 'odd'
			? num => {
					return num % 2 !== 0
			  }
			: false
	}

	const parity = checkWanted(wanted)

	// Подсчитываем вхождения в каждом массиве
	const countsA = countOccurrences(A)
	const countsB = countOccurrences(B)

	// Собираем числа, которые встречаются более одного раза в обоих массивах
	const result = []
	for (const num in countsA) {
		if (countsA[num] > 1 && countsB[num] > 1) {
			const number = parseInt(num)
			// Проверяем, соответствует ли число требуемому типу (even или odd)
			if (parity(number)) {
				result.push(number)
			}
		}
	}

	// Сортируем результат
	return result.sort((a, b) => a - b)
}