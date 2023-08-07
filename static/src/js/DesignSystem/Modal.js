import { findAll } from "utils/dom";
import modalX from "../vendor/modalX";


export default function () {
	const modais = findAll('[js-modal]')?.map((modal) => {

		const attr = modal.getAttribute('js-props')
		const props = attr ? JSON.parse(attr) : {}
		const idModal = modal.getAttribute('js-modal')

		const opts = {
			zIndex: 90,
			zIndexDeep: 80,
			// deep: true,
			// bgModal: null,
			// observer: false,  // To add mutatiom observer in modal
			// onOpen: () => null, 
			// onClose: () => null,
			...props
		}


		const instance = modalX(idModal, opts).init()
		modal.instance = instance
		return instance
	})

	return modais
}
