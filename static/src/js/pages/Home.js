import { find } from "utils/utils"

export default function () {
	const Home = find('#page-home')
	if (!Home) return

	console.log('Home')
}