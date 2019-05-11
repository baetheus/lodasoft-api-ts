import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactRecipient = {
	lenderId: Option<string>;
	firstName: Option<string>;
	lastName: Option<string>;
	emailAddress: Option<string>;
	phoneNumber: Option<string>;
	nmlsLicense: Option<string>;
};
export const LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactRecipientIO = type({
	lenderId: createOptionFromOptional(string, 'lenderId'),
	firstName: createOptionFromOptional(string, 'firstName'),
	lastName: createOptionFromOptional(string, 'lastName'),
	emailAddress: createOptionFromOptional(string, 'emailAddress'),
	phoneNumber: createOptionFromOptional(string, 'phoneNumber'),
	nmlsLicense: createOptionFromOptional(string, 'nmlsLicense'),
});
