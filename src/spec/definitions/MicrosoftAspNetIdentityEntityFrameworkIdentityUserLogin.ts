import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type MicrosoftAspNetIdentityEntityFrameworkIdentityUserLogin = {
	loginProvider: Option<string>;
	providerKey: Option<string>;
	userId: Option<string>;
};
export const MicrosoftAspNetIdentityEntityFrameworkIdentityUserLoginIO = type({
	loginProvider: createOptionFromOptional(string, 'loginProvider'),
	providerKey: createOptionFromOptional(string, 'providerKey'),
	userId: createOptionFromOptional(string, 'userId'),
});
