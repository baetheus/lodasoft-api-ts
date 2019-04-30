import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsZipcodeLookupResult = {
	recordNumber: Option<number>;
	zipcode: Option<string>;
	city: Option<string>;
	state: Option<string>;
	locationText: Option<string>;
};
export const LELodasoftApiModelsZipcodeLookupResultIO = type({
	recordNumber: createOptionFromNullable(number, 'recordNumber'),
	zipcode: createOptionFromNullable(string, 'zipcode'),
	city: createOptionFromNullable(string, 'city'),
	state: createOptionFromNullable(string, 'state'),
	locationText: createOptionFromNullable(string, 'locationText'),
});
