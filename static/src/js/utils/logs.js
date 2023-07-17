export default function () {
	if (import.meta.env.DEV) {
		console.log('\x1b[33m ⚡ GLOBAL \n', GLOBAL)

	} else {
		console.log('\x1b[32m.\x1b[37mnovadata\x1b[0m');
		console.log('https://novadata.com.br/');
	}
}