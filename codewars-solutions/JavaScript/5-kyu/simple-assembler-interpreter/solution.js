function simple_assembler(program) {
	let result = {}
	const commands = {
		mov: (key, value) => {
			;/^-?\d+(\.\d+)?$/.test(value)
				? (result[key] = Number(value))
				: (result[key] = result[value])
		},
		inc: key => (result[key] += 1),
		dec: key => (result[key] -= 1),
		jnz: (key, jump, currentI) => {
			if (result[key] == 0) return currentI
			return currentI + Number(jump) - 1
		},
	}
	for (let i = 0; i < program.length; i++) {
		const [instruction, ...args] = program[i].split(' ')
		if (instruction === 'jnz') {
			i = commands[instruction](...args, i)
		} else {
			commands[instruction](...args)
		}
	}
	return result
}
