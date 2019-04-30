import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

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
	companyId: createOptionFromNullable(number, 'companyId'),
	lenderId: createOptionFromNullable(number, 'lenderId'),
	nameOfLender: createOptionFromNullable(string, 'nameOfLender'),
	phone: createOptionFromNullable(string, 'phone'),
	address: createOptionFromNullable(string, 'address'),
	city: createOptionFromNullable(string, 'city'),
	state: createOptionFromNullable(string, 'state'),
	zip: createOptionFromNullable(string, 'zip'),
});
