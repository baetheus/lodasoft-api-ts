import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsUserLoginInfoViewModel = { loginProvider: Option<string>; providerKey: Option<string> };
export const LELodasoftApiModelsUserLoginInfoViewModelIO = type({
	loginProvider: createOptionFromOptional(string, 'loginProvider'),
	providerKey: createOptionFromOptional(string, 'providerKey'),
});
