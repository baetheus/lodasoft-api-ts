import { Option } from 'fp-ts/lib/Option';
import { string, boolean, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsUserInfoViewModel = {
	userName: Option<string>;
	hasRegistered: Option<boolean>;
	loginProvider: Option<string>;
	emailAddress: Option<string>;
};
export const LELodasoftApiModelsUserInfoViewModelIO = type({
	userName: createOptionFromOptional(string, 'userName'),
	hasRegistered: createOptionFromOptional(boolean, 'hasRegistered'),
	loginProvider: createOptionFromOptional(string, 'loginProvider'),
	emailAddress: createOptionFromOptional(string, 'emailAddress'),
});
