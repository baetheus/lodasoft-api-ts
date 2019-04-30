import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactRecipient = {
	lenderId: Option<string>;
	firstName: Option<string>;
	lastName: Option<string>;
	emailAddress: Option<string>;
	phoneNumber: Option<string>;
	nmlsLicense: Option<string>;
};
export const LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactRecipientIO = type({
	lenderId: createOptionFromNullable(string, 'lenderId'),
	firstName: createOptionFromNullable(string, 'firstName'),
	lastName: createOptionFromNullable(string, 'lastName'),
	emailAddress: createOptionFromNullable(string, 'emailAddress'),
	phoneNumber: createOptionFromNullable(string, 'phoneNumber'),
	nmlsLicense: createOptionFromNullable(string, 'nmlsLicense'),
});
