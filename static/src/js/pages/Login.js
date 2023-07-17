
import { find } from "utils/dom"
import mostraSenha from "../modules/mostrarSenha"

export default function () {
	const Login = find('#page-login')
	if (!Login) return

	const focusOnInput = () => document.addEventListener('DOMContentLoaded',
		() => setTimeout(() => document.getElementById('id_username').focus(), 300))




	function init() {
		focusOnInput()
		mostraSenha()


	}

	return {
		init
	}

}