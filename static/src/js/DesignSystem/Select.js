import { findAll } from '../utils/utils'
import NiceSelect from '../vendor/nice-select2'

export default function () {
	const selects = findAll('select')?.map((select) => {
		const attr = select.getAttribute('js-props')
		const props = attr ? JSON.parse(attr) : {}

		const instance = new NiceSelect(select, {
			placeholder: 'Selecione',
			searchtext: 'Buscar',
			selectedtext: 'Selecionados',
			...props,
		})

		select.instance = instance
		return instance
	})

	return selects
}
