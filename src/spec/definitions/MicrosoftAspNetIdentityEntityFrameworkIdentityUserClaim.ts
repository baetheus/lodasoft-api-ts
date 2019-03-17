import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type MicrosoftAspNetIdentityEntityFrameworkIdentityUserClaim = {
	id: Option<number>;
	userId: Option<string>;
	claimType: Option<string>;
	claimValue: Option<string>;
};
export const MicrosoftAspNetIdentityEntityFrameworkIdentityUserClaimIO = type({
	id: createOptionFromNullable(number),
	userId: createOptionFromNullable(string),
	claimType: createOptionFromNullable(string),
	claimValue: createOptionFromNullable(string),
});
