import Accordion from './Accordion'
import Header from './Header'
import Dropdown from './Dropdown';
import Modal from './Modal';
import Select from './Select';
import Tooltip from './Tooltip';
import Checkbox from './Checkbox';




export default (opts) => ({
	Accordion: Accordion().init(),
	HeaderDefault: Header({ selector: '[js-header="1"]' }).init(),
	Selects: Select(),
	Tooltip: Tooltip(),
	Dropdown: Dropdown(),
	Modal: Modal(),
	Checkbox: Checkbox().init(),
	// Header2: Header({ selector: '[js-header="2"]', fixedOnScrool: true }).init(),








	//Examples
	HeaderExample: Header({ selector: '[js-header="example"]', fixed: false, reduce: false }).init(),
	...opts,
})
