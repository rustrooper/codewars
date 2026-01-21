function ATM(amount, currency) {
	const currencyBanknotes = {
		RUB: [5, 10, 50, 100, 200, 500, 1000, 5000],
		USD: [1, 2, 5, 10, 20, 50, 100],
		EUR: [5, 10, 20, 50, 100, 200, 500],
	}

	if (amount <= 0) return 'Сумма должна быть больше 0'

	const banknotesCounter = new Map()

	currencyBanknotes[currency]
		.sort((a, b) => b - a)
		.forEach(value => {
			while (amount - value >= 0) {
				banknotesCounter.set(value, (banknotesCounter.get(value) || 0) + 1)
				amount -= value
			}
		})

	return amount !== 0 ? 'Эта сумма не может быть выдана' : banknotesCounter.entries()
}
console.log(ATM(15000, 'RUB'))
console.log(ATM(15560, 'RUB'))
console.log(ATM(13581, 'USD'))
console.log(ATM(999, 'RUB'))
console.log(ATM(0, 'EUR'))
console.log(ATM(1, 'EUR'))
console.log(ATM(-2, 'EUR'))
