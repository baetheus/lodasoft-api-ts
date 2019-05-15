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
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsManageInfoViewModel = {
	localLoginProvider: Option<string>;
	userName: Option<string>;
	logins: Option<Array<LELodasoftApiModelsUserLoginInfoViewModel>>;
	externalLoginProviders: Option<Array<LELodasoftApiModelsExternalLoginViewModel>>;
};
export const LELodasoftApiModelsManageInfoViewModelIO = type({
	localLoginProvider: createOptionFromOptional(string, 'localLoginProvider'),
	userName: createOptionFromOptional(string, 'userName'),
	logins: createOptionFromOptional(array(LELodasoftApiModelsUserLoginInfoViewModelIO), 'logins'),
	externalLoginProviders: createOptionFromOptional(
		array(LELodasoftApiModelsExternalLoginViewModelIO),
		'externalLoginProviders',
	),
});
