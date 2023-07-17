import { find } from "utils/dom"

export default function () {
	const Home = find('#page-home')
	if (!Home) return

	console.log('Home')
}