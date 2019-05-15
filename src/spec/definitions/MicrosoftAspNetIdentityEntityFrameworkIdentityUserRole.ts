import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type MicrosoftAspNetIdentityEntityFrameworkIdentityUserRole = { userId: Option<string>; roleId: Option<string> };
export const MicrosoftAspNetIdentityEntityFrameworkIdentityUserRoleIO = type({
	userId: createOptionFromOptional(string, 'userId'),
	roleId: createOptionFromOptional(string, 'roleId'),
});
