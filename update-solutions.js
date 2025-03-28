const fs = require('fs')
const path = require('path')
const readline = require('readline')

const config = {
	baseDir: './codewars-solutions',
	language: 'JavaScript',
}

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

async function askQuestion(question) {
	return new Promise(resolve => {
		rl.question(question, answer => resolve(answer.trim()))
	})
}

async function askMultiline(prompt, endCommand = ':end') {
	console.log(`${prompt}\n(введите "${endCommand}" для завершения)`)
	let input = []

	return new Promise(resolve => {
		const lineHandler = line => {
			if (line.trim() === endCommand) {
				rl.removeAllListeners('line')
				resolve(input.join('\n'))
			} else {
				input.push(line)
			}
		}

		rl.on('line', lineHandler)
	})
}

async function main() {
	try {
		const kyu = await askQuestion('Уровень kyu: ')
		const taskName = await askQuestion('Название задачи: ')
		const description = await askMultiline('Описание задачи:')
		const solutionCode = await askMultiline('Код решения:')

		const safeName = taskName.toLowerCase().replace(/[^\w]+/g, '-')
		const dirPath = path.join(
			config.baseDir,
			config.language,
			`${kyu}-kyu`,
			safeName
		)

		fs.mkdirSync(dirPath, { recursive: true })
		fs.writeFileSync(path.join(dirPath, 'solution.js'), solutionCode)
		fs.writeFileSync(
			path.join(dirPath, 'README.md'),
			`# ${taskName}\n\n${description}`
		)

		console.log('✅ Файлы созданы!')
	} finally {
		rl.close()
	}
}

main()
