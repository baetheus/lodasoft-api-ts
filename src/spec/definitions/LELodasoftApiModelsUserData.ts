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
	userId: createOptionFromNullable(string),
	email: createOptionFromNullable(string),
	phoneNumber: createOptionFromNullable(string),
	twoFactor: createOptionFromNullable(boolean),
	logins: createOptionFromNullable(array(MicrosoftAspNetIdentityUserLoginInfoIO)),
	lastTimeLogin: createOptionFromNullable(DateFromISOString),
	avatar: createOptionFromNullable(string),
});
