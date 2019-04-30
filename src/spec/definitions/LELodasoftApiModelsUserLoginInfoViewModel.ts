import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsUserLoginInfoViewModel = { loginProvider: Option<string>; providerKey: Option<string> };
export const LELodasoftApiModelsUserLoginInfoViewModelIO = type({
	loginProvider: createOptionFromNullable(string, 'loginProvider'),
	providerKey: createOptionFromNullable(string, 'providerKey'),
});
