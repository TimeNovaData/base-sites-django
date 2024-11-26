export default function () {
	const DEV = import.meta.env.DEV

	if (DEV) return
	console.log('\x1b[32m.\x1b[37mnovadata\x1b[0m')
	console.log('https://novadata.com.br/')
}
