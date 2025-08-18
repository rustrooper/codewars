function changeCase(identifier, targetCase) {
	if (identifier === '') return ''
	if (!['snake', 'camel', 'kebab'].includes(targetCase)) return undefined

	const hasUnderscore = identifier.includes('_')
	const hasHyphen = identifier.includes('-')
	const hasUpperCase = /[A-Z]/.test(identifier)

	if ((hasUnderscore && hasHyphen) || (hasUnderscore && hasUpperCase) || (hasHyphen && hasUpperCase)) {
		return undefined
	}

	if (!/^[a-zA-Z0-9_-]*$/.test(identifier)) {
		return undefined
	}

	let words = []

	if (hasUnderscore) {
		words = identifier.split('_')
	} else if (hasHyphen) {
		words = identifier.split('-')
	} else if (hasUpperCase) {
		words = identifier.split(/(?=[A-Z])/).map(w => w.toLowerCase())
	} else {
		words = [identifier]
	}

	if (words.some(word => word === '')) {
		return undefined
	}

	switch (targetCase) {
		case 'snake':
			return words.join('_')
		case 'kebab':
			return words.join('-')
		case 'camel':
			return words.map((word, i) => (i === 0 ? word : word[0].toUpperCase() + word.slice(1))).join('')
		default:
			return undefined
	}
}

console.log(changeCase('snakeCase', 'snake'))
console.log(changeCase('some-lisp-name', 'camel'))
