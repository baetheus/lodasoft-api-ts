import {
	LELodasoftApiModelsExternalLoginViewModel,
	LELodasoftApiModelsExternalLoginViewModelIO,
} from '../definitions/LELodasoftApiModelsExternalLoginViewModel';
import {
	LELodasoftApiModelsUserLoginInfoViewModel,
	LELodasoftApiModelsUserLoginInfoViewModelIO,
} from '../definitions/LELodasoftApiModelsUserLoginInfoViewModel';
import { Option } from 'fp-ts/lib/Option';
import { string, array, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsManageInfoViewModel = {
	localLoginProvider: Option<string>;
	userName: Option<string>;
	logins: Option<Array<LELodasoftApiModelsUserLoginInfoViewModel>>;
	externalLoginProviders: Option<Array<LELodasoftApiModelsExternalLoginViewModel>>;
};
export const LELodasoftApiModelsManageInfoViewModelIO = type({
	localLoginProvider: createOptionFromNullable(string, 'localLoginProvider'),
	userName: createOptionFromNullable(string, 'userName'),
	logins: createOptionFromNullable(array(LELodasoftApiModelsUserLoginInfoViewModelIO), 'logins'),
	externalLoginProviders: createOptionFromNullable(
		array(LELodasoftApiModelsExternalLoginViewModelIO),
		'externalLoginProviders',
	),
});
