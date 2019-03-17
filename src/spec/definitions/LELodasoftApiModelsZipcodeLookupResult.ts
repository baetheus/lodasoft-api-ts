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
	recordNumber: createOptionFromNullable(number),
	zipcode: createOptionFromNullable(string),
	city: createOptionFromNullable(string),
	state: createOptionFromNullable(string),
	locationText: createOptionFromNullable(string),
});
