import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftCommonModelsLeadsProviderModelsAddressInfo = {
	address1: Option<string>;
	address2: Option<string>;
	city: Option<string>;
	state: Option<string>;
	zip: Option<string>;
};
export const LELodasoftCommonModelsLeadsProviderModelsAddressInfoIO = type({
	address1: createOptionFromOptional(string, 'address1'),
	address2: createOptionFromOptional(string, 'address2'),
	city: createOptionFromOptional(string, 'city'),
	state: createOptionFromOptional(string, 'state'),
	zip: createOptionFromOptional(string, 'zip'),
});
