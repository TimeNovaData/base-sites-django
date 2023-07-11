import { findAll } from '../utils/utils';
import NiceSelect from '../vendor/nice-select2'

export default function () {
	const selects = [...findAll('select')]
		.map(select => {
			const instance = new NiceSelect(select, { searchable: true });
			select.instance = instance
			return instance
		})

	return selects

}
