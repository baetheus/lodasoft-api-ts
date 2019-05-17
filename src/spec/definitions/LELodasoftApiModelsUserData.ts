import {
	MicrosoftAspNetIdentityUserLoginInfo,
	MicrosoftAspNetIdentityUserLoginInfoIO,
} from '../definitions/MicrosoftAspNetIdentityUserLoginInfo';
import { Option } from 'fp-ts/lib/Option';
import { string, boolean, array, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsUserData = {
	userId: Option<string>;
	email: Option<string>;
	phoneNumber: Option<string>;
	twoFactor: Option<boolean>;
	logins: Option<Array<MicrosoftAspNetIdentityUserLoginInfo>>;
	lastTimeLogin: Option<Date>;
	avatar: Option<string>;
};
export const LELodasoftApiModelsUserDataIO = type({
	userId: createOptionFromOptional(string, 'userId'),
	email: createOptionFromOptional(string, 'email'),
	phoneNumber: createOptionFromOptional(string, 'phoneNumber'),
	twoFactor: createOptionFromOptional(boolean, 'twoFactor'),
	logins: createOptionFromOptional(array(MicrosoftAspNetIdentityUserLoginInfoIO), 'logins'),
	lastTimeLogin: createOptionFromOptional(DateFromDatelike, 'lastTimeLogin'),
	avatar: createOptionFromOptional(string, 'avatar'),
});
