// mudar essa funcao 
// para receber ou seletor ou node

import { gsap } from "gsap";
import { find, findAll } from "utils/dom";

export default function (ID_MODAL, opts) {

	const options = {
		content: "[js-modal-content]",
		classOpen: 'open',
		classActive: "active",
		deep: true,
		zIndex: null,
		zIndexDeep: null,
		bgModal: null,
		onOpen: () => null,
		onClose: () => null,
		...opts,
	};


	//els
	const $Body = document.body;
	const $Modal = find(`[js-modal="${ID_MODAL}"]`)
	const $Deep = document.createElement("div");
	const $Contents = findAll(`${options.content}`, $Modal);

	//STATE
	const state = { open: false, idActive: "" };

	const changeIDActive = (id) => state.idActive = id;
	const getContentActive = () => find(`[js-modal-content][data-id="${state.idActive}"]`, $Modal)

	// FUNDO
	function createDeep() {
		if (options.deep) {
			$Body.appendChild($Deep);
			$Deep.setAttribute(`js-modal-deep`, ID_MODAL);
			$Deep.addEventListener("click", closeModal);
			return this;
		}
	}

	//OPEN
	function openModal(item, classX) {
		options.onOpen()

		const elemento = typeof item === "object";
		const id = elemento ? item.dataset.id : item;

		changeIDActive(id);
		const contentActive = getContentActive()


		$Modal.classList.add(options.classActive);
		$Deep.classList.add(options.classActive);
		$Body.classList.add(`${ID_MODAL}-${options.classOpen}`);

		$Contents && $Contents.forEach((i) => i.classList.remove(options.classActive));
		contentActive && contentActive.classList.add(options.classActive);

		$Modal.dataset.active = state.idActive;
		state.open = true;


		if (contentActive) {

			const
				height = contentActive.getBoundingClientRect().height,
				width = contentActive.getBoundingClientRect().width,
				removePosition = () => find(`[js-modal-content].active`, $Modal)?.style.removeProperty('position')

			gsap.timeline()
				.set(contentActive, { position: "absolute" })
				.to($Modal, {
					height,
					width,
					duration: 0.6,
					ease: "Power3.easeOut",
				})
				.call(removePosition, '', "+=0.3")

		}

		classX ? addClassOnModal(true, classX) : "";

		return this;
	}

	// CLOSE
	function closeModal() {
		options.onClose()
		const modalHeight = $Modal.getBoundingClientRect().height.toFixed(0) + 'px';
		const contentActive = getContentActive()

		$Contents && $Contents.forEach((i) => i.classList.remove(options.classActive));
		$Modal.classList.remove(options.classActive);
		$Deep.classList.remove(options.classActive);

		state.idActive = "";
		$Modal.dataset.active = state.idActive;
		state.open = false;

		addClassOnModal(false);
		changeIDActive("");
		$Body.classList.remove(`${ID_MODAL}-${options.classOpen}`);

		// para nao pular a altura da secao 
		contentActive && (contentActive.style.maxHeight = `${modalHeight}`);
		setTimeout(() => {
			contentActive?.style.removeProperty("max-height"); // remove
			$Modal.style.removeProperty("height");
			$Modal.style.removeProperty("width");
		}, 300);


		return this;
	}

	// TOGGLE
	function toggleModal(target, classX) {
		state.open ? closeModal() : openModal(target);
		return this;
	}

	function addClassOnModal(verification, classX) {
		verification
			? $Modal.setAttribute("data-classX", classX)
			: $Modal.removeAttribute("data-classX");
	}

	//DATA-ATRIBUTE
	function dataOpenEClose() {
		const dataOpen = findAll(`[data-xopen="${ID_MODAL}"]`);
		const dataClose = findAll(`[data-xclose="${ID_MODAL}"]`);
		const dataToggle = findAll(`[data-xtoggle="${ID_MODAL}"]`);

		dataOpen.forEach((i) =>
			i.addEventListener("click", (ev) => {
				openModal(i);
				const target = ev.currentTarget;
				const haveClassAttribute = target.dataset.classx;

				if (haveClassAttribute) {
					addClassOnModal(true, haveClassAttribute);
				}
			})
		);

		dataClose.forEach((i) => i.addEventListener("click", closeModal));
		dataToggle.forEach((i) => {
			const toggle = () => toggleModal(i)
			i.addEventListener("click", toggle)
		});
	}


	//STYLES
	function addStyles() {
		options.zIndex && $Modal.style.setProperty("--zindex-modal", options.zIndex)
		options.bgModal && $Modal.style.setProperty("--bg-modal", options.bgModal)
		options.zIndexDeep && $Deep.style.setProperty("--zindex-deep", options.zIndexDeep)
	}




	function init() {
		dataOpenEClose();
		createDeep();
		addStyles();
		return this;
	}

	return {
		elModal: $Modal,
		getState: () => state,
		openModal,
		closeModal,
		toggleModal,
		init,
		id: ID_MODAL
	};
}


