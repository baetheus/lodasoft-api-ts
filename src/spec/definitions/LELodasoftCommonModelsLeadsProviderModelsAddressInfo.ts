import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsLeadsProviderModelsAddressInfo = {
	address1: Option<string>;
	address2: Option<string>;
	city: Option<string>;
	state: Option<string>;
	zip: Option<string>;
};
export const LELodasoftCommonModelsLeadsProviderModelsAddressInfoIO = type({
	address1: createOptionFromNullable(string),
	address2: createOptionFromNullable(string),
	city: createOptionFromNullable(string),
	state: createOptionFromNullable(string),
	zip: createOptionFromNullable(string),
});
