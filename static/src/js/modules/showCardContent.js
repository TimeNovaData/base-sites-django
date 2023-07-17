export default function () {
	const cardButtons = document.querySelectorAll('[js-card-content]')

	if (!cardButtons.length) return

	function handleShowCardContent(event) {
		const element = event.currentTarget
		const icon = element.querySelector('ion-icon')
		const currentName = icon.getAttribute('name')
		const newName = currentName === 'add-circle-outline' ? 'remove-circle-outline' : 'add-circle-outline'

		icon.setAttribute('name', newName)
	}

	cardButtons.forEach((cardButton) => {
		cardButton.addEventListener('click', handleShowCardContent)
	})
}
