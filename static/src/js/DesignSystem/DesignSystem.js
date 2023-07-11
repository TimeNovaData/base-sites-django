import Accordion from './Accordion'
import Header from './Header'
import Select from './Select';




export default (opts) => ({
	Accordion: Accordion().init(),
	HeaderDefault: Header({ selector: '[js-header="1"]' }).init(),
	Selects: Select(),
	// Header2: Header({ selector: '[js-header="2"]', fixedOnScrool: true }).init(),

	...opts,
})
