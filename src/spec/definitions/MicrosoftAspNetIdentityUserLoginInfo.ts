import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type MicrosoftAspNetIdentityUserLoginInfo = { loginProvider: Option<string>; providerKey: Option<string> };
export const MicrosoftAspNetIdentityUserLoginInfoIO = type({
	loginProvider: createOptionFromNullable(string),
	providerKey: createOptionFromNullable(string),
});
