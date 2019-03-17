import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type MicrosoftAspNetIdentityEntityFrameworkIdentityUserRole = { userId: Option<string>; roleId: Option<string> };
export const MicrosoftAspNetIdentityEntityFrameworkIdentityUserRoleIO = type({
	userId: createOptionFromNullable(string),
	roleId: createOptionFromNullable(string),
});
