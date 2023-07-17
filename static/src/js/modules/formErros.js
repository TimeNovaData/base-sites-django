export default function () {
	const id = 'js-error'
	const el = document.getElementById(id)
	if (!el) return
	var data = JSON.parse(el.textContent);

	const lines = data?.__all__?.map(i => `<p js-error-line >${i}</p>`)
	if (!lines?.length) return
	const wrapper = document.createElement('div')
	wrapper.setAttribute('js-error-wrapper', true)
	wrapper.innerHTML = lines.join()

	el.insertAdjacentElement('afterend', wrapper)

}