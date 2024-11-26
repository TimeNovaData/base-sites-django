const sharp = require('sharp')
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')

const imagens = percorrerDiretorio('./static/public/images')

let tamanhoOriginalTotal = 0
let tamanhoConvertidoTotal = 0

const wepProps = { effort: 6, lossless: false, quality: 90, smartSubsample: true }

const question = {
	type: 'list',
	name: 'opcao',
	message: `
\x1b[32m.\x1b[37mnovadata\x1b[0m

Conversor 
\x1b[36mPNG, JPG, JPEG \x1b[0m ➡️  \x1b[33mWEBP \x1b[90m static/public/img
\x1b[37m
Selecione uma opção:
`,
	choices: [
		{ name: 'Todas', value: 'all' },
		{ name: 'Somente novas', value: 'new' },
	],
}

inquirer.prompt(question).then((answers) => {
	const opcaoSelecionada = answers.opcao

	const todasImagens = opcaoSelecionada === 'all'

	imagens.forEach(function (imagemPath) {
		const arquivo = path.basename(imagemPath)
		const webpPath = path.join(path.dirname(imagemPath), path.parse(arquivo).name + '.webp')

		const extensao = path.extname(arquivo).toLowerCase()
		if (extensao !== '.jpg' && extensao !== '.png' && extensao !== '.jpeg') return

		// se nao é todas pula as que ja foram convertidas
		if (!todasImagens && fs.existsSync(webpPath)) return

		// Obter tamanho original do arquivo
		const statsOriginal = fs.statSync(imagemPath)
		const tamanhoOriginal = statsOriginal.size
		tamanhoOriginalTotal += tamanhoOriginal

		sharp(imagemPath)
			.metadata()
			.then((metadata) => {
				const largura = metadata.width
				const altura = metadata.height

				// Verificar se a imagem é maior que 1920 pixels
				if (largura > 1920 || altura > 1920) {
					let novaLargura, novaAltura
					if (largura > altura) {
						novaLargura = 1920
						novaAltura = Math.round((novaLargura / largura) * altura)
					} else {
						novaAltura = 1920
						novaLargura = Math.round((novaAltura / altura) * largura)
					}

					sharp(imagemPath)
						.resize(novaLargura, novaAltura)
						.webp(wepProps)
						.toFile(webpPath, imgCallback(webpPath, tamanhoOriginal, { largura, altura, resized: true }))
				} else {
					sharp(imagemPath)
						.webp(wepProps)
						.toFile(webpPath, imgCallback(webpPath, tamanhoOriginal, { largura, altura, resized: false }), {})
				}
			})
			.catch((err) => {
				console.error('Erro ao obter as dimensões da imagem:', err)
			})
	})
})

function imgCallback(webpPath, original, { largura, altura, resized }) {
	return function (err, info) {
		if (err) {
			console.error(`Erro ao salvar a imagem: ${webpPath}`, err)
		} else {
			const statsConvertido = fs.statSync(webpPath)
			const tamanhoConvertido = statsConvertido.size

			tamanhoConvertidoTotal += tamanhoConvertido

			// const tf = formatarBytes(tamanhoConvertido);

			function valorMaiorQue600kb(bytes) {
				const tamanhoEmKb = bytes / 1024
				return tamanhoEmKb > 600
			}

			const finalColor = () =>
				valorMaiorQue600kb(tamanhoConvertido)
					? `\x1b[35m ${formatarBytes(tamanhoConvertido)}`
					: `${formatarBytes(tamanhoConvertido)}`

			const total = formatarBytes(tamanhoConvertido - original)
			const percentage = ((tamanhoConvertido - original) / original) * 100
			console.log(
				'\x1b[33m',
				`✅ ${webpPath.replace('static/public/img/', '')} ${resized ? `\x1b[90m(resized: ${largura} x ${altura})` : ''}`
			)
			console.log(`\x1b[90m ${formatarBytes(original)}  ➡️  ${finalColor()}`)
			console.log(
				total.includes('-') ? '\x1b[32m' : '\x1b[31m',
				`${total.includes('-') ? total : '+' + total}${
					percentage >= 0 ? `  ↑  +${percentage.toFixed(2)}%` : ` ↓  ${percentage.toFixed(2)}%`
				}`
			)
			console.log(``)
		}
	}
}

function formatarBytes(bytes) {
	const unidades = ['B', 'KB', 'MB', 'GB']
	let tamanho = Math.abs(bytes) // Obter o valor absoluto do tamanho
	let unidade = 0

	while (tamanho >= 1024 && unidade < unidades.length - 1) {
		tamanho /= 1024
		unidade++
	}

	const sinal = bytes < 0 ? '-' : '' // Adicionar sinal negativo, se necessário
	return sinal + tamanho.toFixed(2) + ' ' + unidades[unidade]
}

function percorrerDiretorio(diretorio, resultado = []) {
	const arquivos = fs.readdirSync(diretorio)

	arquivos.forEach(function (arquivo) {
		const caminho = path.join(diretorio, arquivo)
		const stat = fs.statSync(caminho)

		if (stat && stat.isDirectory()) {
			percorrerDiretorio(caminho, resultado)
		} else {
			resultado.push(caminho)
		}
	})

	return resultado
}
