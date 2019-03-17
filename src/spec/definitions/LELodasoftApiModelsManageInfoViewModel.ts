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
	localLoginProvider: createOptionFromNullable(string),
	userName: createOptionFromNullable(string),
	logins: createOptionFromNullable(array(LELodasoftApiModelsUserLoginInfoViewModelIO)),
	externalLoginProviders: createOptionFromNullable(array(LELodasoftApiModelsExternalLoginViewModelIO)),
});
