// mudar essa funcao 
// para receber ou seletor ou node

import { gsap } from "gsap";
import { find, findAll } from "../utils/utils";

export default function (ID_MODAL, opts) {

	const options = {
		content: "[js-modal-content]",
		classOpen: 'open',
		classActive: "active",
		deep: true,
		zIndex: null,
		zIndexDeep: null,
		bgModal: null,
		observer: false,  // To add mutatiom observer in modal
		onOpen: () => null,
		onClose: () => null,
		...opts,
	};


	//els
	const $body = document.body;
	const $Modal = find(`[js-modal="${ID_MODAL}"]`)
	const $Deep = document.createElement("div");

	// const ID_MODAL = $Modal.replace(".", "");

	const items = findAll(`${options.content}`, $Modal);

	//STATE
	const state = {
		open: false,
		idActive: "",
	};

	const changeIDActive = (id) => {
		state.idActive = id;
	};

	// UTILITY
	function createElementAndAppend(el, src, type = "text/javascript") {
		const script = document.createElement(el);
		script.type = type;
		script.src = src;
		document.body.appendChild(script);
	}

	// FUNDO
	function createDeep() {
		if (options.deep) {
			document.body.appendChild($Deep);
			$Deep.setAttribute(`js-modal-deep`, ID_MODAL);
			$Deep.addEventListener("click", closeModal);
			return this;
		}
	}

	//OPEN
	function openModal(item, classX, tabName) {
		options.onOpen()

		const elemento = typeof item === "object";

		const id = elemento ? item.dataset.id : item;

		changeIDActive(id);
		const actualSectionActive = find(`[js-modal-content][data-id="${state.idActive}"]`, $Modal)

		$Modal.classList.add(options.classActive);
		$Deep.classList.add(options.classActive);
		$body.classList.add(`${ID_MODAL}-${options.classOpen}`);

		items && items.forEach((i) => i.classList.remove(options.classActive));
		actualSectionActive && actualSectionActive.classList.add(options.classActive);

		$Modal.dataset.active = state.idActive;
		state.open = true;

		const
			height = actualSectionActive.getBoundingClientRect().height,
			width = actualSectionActive.getBoundingClientRect().width
		// console.log({ height, width });

		gsap.timeline()
			.set(actualSectionActive, { position: "absolute" })
			.to($Modal, {
				height,
				width,
				duration: 0.6,
				ease: "Expo.easeOut",
			})
			.call(() => find(`[js-modal-content].active`, $Modal)?.style.removeProperty('position'), '', "+=0.3")






		classX ? addClassOnModal(true, classX) : "";

		if (tabName) {
			const tabLink = find(`[href="${tabName}"]`);
			tabLink && tabLink.dispatchEvent(new Event("click"));
		}

		return this;
	}

	// CLOSE
	function closeModal() {
		options.onClose()
		const modalWidth = `${$Modal.getBoundingClientRect().width.toFixed(0)}px `;
		const modalHeight = `${$Modal
			.getBoundingClientRect()
			.height.toFixed(0)}px `;

		const actualSectionActive = find(`[js-modal-content][data-id="${state.idActive}"]`, $Modal)


		items && items.forEach((i) => i.classList.remove(options.classActive));
		$Modal.classList.remove(options.classActive);
		$Deep.classList.remove(options.classActive);

		state.idActive = "";
		$Modal.dataset.active = state.idActive;
		state.open = false;

		addClassOnModal(false);
		changeIDActive("");
		$body.classList.remove(`${ID_MODAL}-${options.classOpen}`);
		actualSectionActive.style.maxHeight = `${modalHeight}`;

		setTimeout(() => {
			actualSectionActive.style.removeProperty("max-height");
			$Modal.style.removeProperty("height");
			$Modal.style.removeProperty("width");
		}, 300);



		return this;
	}

	// TOGGLE
	function toggleModal(target, classX) {
		state.open ? closeModal() :
			openModal(target);
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

		const dataClose = findAll(
			`[data-xclose="${ID_MODAL}"]`
		);
		const dataToggle = findAll(
			`[data-xtoggle="${ID_MODAL}"]`
		);

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

		dataClose.forEach((i) => i.addEventListener("click", () => closeModal()));
		dataToggle.forEach((i) =>
			i.addEventListener("click", () => toggleModal(i))
		);
	}

	// HAMMER
	async function hammerFeature() {
		if (options.closeOnSwipe) {
			const hammerLink = "https://hammerjs.github.io/dist/hammer.min.js";
			const temHammer =
				Array.from(document.scripts).filter((e) => e.src === hammerLink)
					.length === 1;
			if (temHammer) {
				return;
			}

			// if (Hammer) return
			const lado = () => {
				const l = $Modal.dataset.position;
				if (l === "bottom") return "down";
				else if (l === "top") return "up";
				else return l;
			};

			createElementAndAppend("script", hammerLink);

			await new Promise((resolve) => {
				const interval = setInterval(() => {
					if (!window.Hammer) {
						return;
					} else {
						clearInterval(interval);
						resolve();
					}
				}, 50);
			});

			const hammerEl = await new Hammer($Modal);

			hammerEl.on(`swipe${lado()}`, () => closeModal());
		}
	}

	//STYLES
	function addStyles() {
		options.zIndex && $Modal.style.setProperty("--zindex-modal", options.zIndex)
		options.bgModal && $Modal.style.setProperty("--bg-modal", options.bgModal)
		options.zIndexDeep && $Deep.style.setProperty("--zindex-deep", options.zIndexDeep)
	}

	// OBSERVER
	function ObserverModal() {
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.type == "attributes") {
					// if (mutation.target.dataset.active) { }
				}
			});
		});

		observer.observe($Modal, {
			attributes: true,
			// attributeFilter: ['data-active']
		});

	}


	function init() {

		dataOpenEClose();
		createDeep();
		hammerFeature();
		addStyles();
		options.observer && ObserverModal();
		return this;
	}

	return {
		elModal: $Modal,
		state,
		openModal,
		closeModal,
		toggleModal,
		init,
		id: ID_MODAL
	};
}


