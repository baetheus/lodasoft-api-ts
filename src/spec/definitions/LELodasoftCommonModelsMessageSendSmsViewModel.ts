import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsMessageSendSmsViewModel = {
	from: Option<string>;
	to: Option<string>;
	body: Option<string>;
};
export const LELodasoftCommonModelsMessageSendSmsViewModelIO = type({
	from: createOptionFromNullable(string, 'from'),
	to: createOptionFromNullable(string, 'to'),
	body: createOptionFromNullable(string, 'body'),
});
