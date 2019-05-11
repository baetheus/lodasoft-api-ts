import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftApiModelsAdminLenderModelView = {
	companyId: Option<number>;
	lenderId: Option<number>;
	nameOfLender: Option<string>;
	phone: Option<string>;
	address: Option<string>;
	city: Option<string>;
	state: Option<string>;
	zip: Option<string>;
};
export const LELodasoftApiModelsAdminLenderModelViewIO = type({
	companyId: createOptionFromOptional(number, 'companyId'),
	lenderId: createOptionFromOptional(number, 'lenderId'),
	nameOfLender: createOptionFromOptional(string, 'nameOfLender'),
	phone: createOptionFromOptional(string, 'phone'),
	address: createOptionFromOptional(string, 'address'),
	city: createOptionFromOptional(string, 'city'),
	state: createOptionFromOptional(string, 'state'),
	zip: createOptionFromOptional(string, 'zip'),
});
