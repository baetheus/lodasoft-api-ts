import { Option } from 'fp-ts/lib/Option';
import { string, boolean, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsUserInfoViewModel = {
	userName: Option<string>;
	hasRegistered: Option<boolean>;
	loginProvider: Option<string>;
	emailAddress: Option<string>;
};
export const LELodasoftApiModelsUserInfoViewModelIO = type({
	userName: createOptionFromNullable(string),
	hasRegistered: createOptionFromNullable(boolean),
	loginProvider: createOptionFromNullable(string),
	emailAddress: createOptionFromNullable(string),
});
