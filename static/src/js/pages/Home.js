import Swiper from "swiper"
import { find } from "utils/dom"

export default function () {
	const Home = find("[js-page='home']")
	if (!Home) return

	console.log('Page home');
}