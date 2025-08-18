var fireAndFury = function (tweet) {
	if (!/^[FIREUY]+$/.test(tweet)) {
		return 'Fake tweet.'
	}

	let matches = [...tweet].reduce((acc, symbol, index, str) => {
		if (index < str.length - 3) {
			const word = str.slice(index, index + 4).join('')
			if (word === 'FIRE') acc.push('FIRE')
			if (word === 'FURY') acc.push('FURY')
		}
		return acc
	}, [])

	let result = []
	let currentWord = null
	let count = 0

	for (const word of matches) {
		if (currentWord === null) {
			currentWord = word
			count = 1
		} else if (word === currentWord) {
			count++
		} else {
			addPhrase(result, currentWord, count)
			currentWord = word
			count = 1
		}
	}

	if (currentWord !== null) {
		addPhrase(result, currentWord, count)
	}

	return matches.length > 0 ? result.join(' ') : 'Fake tweet.'
}

function addPhrase(result, word, count) {
	if (word === 'FIRE') {
		if (count === 1) {
			result.push('You are fired!')
		} else {
			result.push(`You${' and you'.repeat(count - 1)} are fired!`)
		}
	} else if (word === 'FURY') {
		if (count === 1) {
			result.push('I am furious.')
		} else {
			result.push(`I am${' really'.repeat(count - 1)} furious.`)
		}
	}
}
