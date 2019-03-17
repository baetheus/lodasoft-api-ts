import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsMessageSmsSearchBorrowerRequest = { phone: Option<string> };
export const LELodasoftCommonModelsMessageSmsSearchBorrowerRequestIO = type({
	phone: createOptionFromNullable(string),
});
