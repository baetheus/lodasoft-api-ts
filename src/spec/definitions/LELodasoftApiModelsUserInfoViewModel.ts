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
	userName: createOptionFromNullable(string, 'userName'),
	hasRegistered: createOptionFromNullable(boolean, 'hasRegistered'),
	loginProvider: createOptionFromNullable(string, 'loginProvider'),
	emailAddress: createOptionFromNullable(string, 'emailAddress'),
});
