import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftCommonModelsMessageSendSmsViewModel = {
	from: Option<string>;
	to: Option<string>;
	body: Option<string>;
};
export const LELodasoftCommonModelsMessageSendSmsViewModelIO = type({
	from: createOptionFromOptional(string, 'from'),
	to: createOptionFromOptional(string, 'to'),
	body: createOptionFromOptional(string, 'body'),
});
