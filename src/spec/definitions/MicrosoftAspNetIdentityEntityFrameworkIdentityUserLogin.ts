import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type MicrosoftAspNetIdentityEntityFrameworkIdentityUserLogin = {
	loginProvider: Option<string>;
	providerKey: Option<string>;
	userId: Option<string>;
};
export const MicrosoftAspNetIdentityEntityFrameworkIdentityUserLoginIO = type({
	loginProvider: createOptionFromNullable(string),
	providerKey: createOptionFromNullable(string),
	userId: createOptionFromNullable(string),
});
