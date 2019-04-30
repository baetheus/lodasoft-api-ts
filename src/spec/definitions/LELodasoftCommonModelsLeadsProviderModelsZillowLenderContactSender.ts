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
	emailAddress: createOptionFromNullable(string, 'emailAddress'),
	firstName: createOptionFromNullable(string, 'firstName'),
	lastName: createOptionFromNullable(string, 'lastName'),
	phoneNumber: createOptionFromNullable(string, 'phoneNumber'),
});
