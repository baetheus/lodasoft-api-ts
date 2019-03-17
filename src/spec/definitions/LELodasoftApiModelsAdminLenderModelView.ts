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
	companyId: createOptionFromNullable(number),
	lenderId: createOptionFromNullable(number),
	nameOfLender: createOptionFromNullable(string),
	phone: createOptionFromNullable(string),
	address: createOptionFromNullable(string),
	city: createOptionFromNullable(string),
	state: createOptionFromNullable(string),
	zip: createOptionFromNullable(string),
});
