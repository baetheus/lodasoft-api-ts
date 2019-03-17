import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactSender = {
	emailAddress: Option<string>;
	firstName: Option<string>;
	lastName: Option<string>;
	phoneNumber: Option<string>;
};
export const LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactSenderIO = type({
	emailAddress: createOptionFromNullable(string),
	firstName: createOptionFromNullable(string),
	lastName: createOptionFromNullable(string),
	phoneNumber: createOptionFromNullable(string),
});
