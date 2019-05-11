import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsMessageSmsSearchBorrowerRequest = { phone: Option<string> };
export const LELodasoftCommonModelsMessageSmsSearchBorrowerRequestIO = type({
	phone: createOptionFromOptional(string, 'phone'),
});
