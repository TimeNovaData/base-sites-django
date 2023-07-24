/** Verifica se o usuario apertou tab para 
 * ligar opcoes de acessibilidade
 */
export default function () {

	document.body.addEventListener('mousedown', function () {
		document.body.classList.add('using-mouse');
	});


	document.body.addEventListener('keydown', function (event) {
		if (event.key === "Tab") {
			document.body.classList.remove('using-mouse');
		}
	});

	document.addEventListener('DOMContentLoaded', () => document.body.classList.add('using-mouse'))

}