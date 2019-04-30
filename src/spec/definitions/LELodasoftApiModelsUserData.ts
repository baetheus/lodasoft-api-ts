import {
	MicrosoftAspNetIdentityUserLoginInfo,
	MicrosoftAspNetIdentityUserLoginInfoIO,
} from '../definitions/MicrosoftAspNetIdentityUserLoginInfo';
import { Option } from 'fp-ts/lib/Option';
import { string, boolean, array, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

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
	userId: createOptionFromNullable(string, 'userId'),
	email: createOptionFromNullable(string, 'email'),
	phoneNumber: createOptionFromNullable(string, 'phoneNumber'),
	twoFactor: createOptionFromNullable(boolean, 'twoFactor'),
	logins: createOptionFromNullable(array(MicrosoftAspNetIdentityUserLoginInfoIO), 'logins'),
	lastTimeLogin: createOptionFromNullable(DateFromISOString, 'lastTimeLogin'),
	avatar: createOptionFromNullable(string, 'avatar'),
});
