import { find } from 'utils/dom'
import mostraSenha from '../modules/mostrarSenha'

export default function () {
	const Login = find("[js-page='login']")
	if (!Login) return

	const focus = () => setTimeout(() => document.getElementById('id_username').focus(), 400)

	const focusOnInput = () => document.addEventListener('DOMContentLoaded', focus)

	function init() {
		focusOnInput()
		mostraSenha()
	}

	return {
		init,
	}
}
