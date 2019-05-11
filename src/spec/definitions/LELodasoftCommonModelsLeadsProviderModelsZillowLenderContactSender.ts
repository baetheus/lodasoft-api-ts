import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactSender = {
	emailAddress: Option<string>;
	firstName: Option<string>;
	lastName: Option<string>;
	phoneNumber: Option<string>;
};
export const LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactSenderIO = type({
	emailAddress: createOptionFromOptional(string, 'emailAddress'),
	firstName: createOptionFromOptional(string, 'firstName'),
	lastName: createOptionFromOptional(string, 'lastName'),
	phoneNumber: createOptionFromOptional(string, 'phoneNumber'),
});
