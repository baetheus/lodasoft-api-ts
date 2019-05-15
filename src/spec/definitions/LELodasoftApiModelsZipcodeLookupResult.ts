import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsZipcodeLookupResult = {
	recordNumber: Option<number>;
	zipcode: Option<string>;
	city: Option<string>;
	state: Option<string>;
	locationText: Option<string>;
};
export const LELodasoftApiModelsZipcodeLookupResultIO = type({
	recordNumber: createOptionFromOptional(number, 'recordNumber'),
	zipcode: createOptionFromOptional(string, 'zipcode'),
	city: createOptionFromOptional(string, 'city'),
	state: createOptionFromOptional(string, 'state'),
	locationText: createOptionFromOptional(string, 'locationText'),
});
