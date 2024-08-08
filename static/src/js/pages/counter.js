export default function initCounterUp() {
	const counterUp = window.counterUp?.default

	const callback = (entries) => {
		entries?.forEach((entry) => {
			const el = entry.target
			if (entry.isIntersecting && !el.classList.contains('is-visible')) {
				counterUp(el, {
					duration: 400,
					delay: 16,
				})
				el.classList.add('is-visible')
			}
		})
	}

	const IO = new IntersectionObserver(callback, {
		threshold: 1,
	})

	const elArray = document.querySelectorAll('.counter')
	elArray.forEach((counter) => IO.observe(counter))
}