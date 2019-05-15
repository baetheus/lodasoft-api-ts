import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type MicrosoftAspNetIdentityEntityFrameworkIdentityUserClaim = {
	id: Option<number>;
	userId: Option<string>;
	claimType: Option<string>;
	claimValue: Option<string>;
};
export const MicrosoftAspNetIdentityEntityFrameworkIdentityUserClaimIO = type({
	id: createOptionFromOptional(number, 'id'),
	userId: createOptionFromOptional(string, 'userId'),
	claimType: createOptionFromOptional(string, 'claimType'),
	claimValue: createOptionFromOptional(string, 'claimValue'),
});
