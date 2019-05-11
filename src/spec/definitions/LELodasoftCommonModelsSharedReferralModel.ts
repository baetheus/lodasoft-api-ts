import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

import { createEnumType } from '../utils/utils';

export enum ReferralTypeEnum {
	'Borrower',
	'Agent',
}

export type LELodasoftCommonModelsSharedReferralModel = {
	referToUserId: Option<string>;
	referralType: Option<ReferralTypeEnum>;
	firstName: Option<string>;
	lastName: Option<string>;
	userContact: Option<string>;
	email: Option<string>;
	phone: Option<string>;
	note: Option<string>;
	referredByName: Option<string>;
	referredByEmail: Option<string>;
	referredByPhone: Option<string>;
};
export const LELodasoftCommonModelsSharedReferralModelIO = type({
	referToUserId: createOptionFromOptional(string, 'referToUserId'),
	referralType: createOptionFromOptional(
		createEnumType<ReferralTypeEnum>(ReferralTypeEnum, 'ReferralTypeEnum'),
		'referralType',
	),
	firstName: createOptionFromOptional(string, 'firstName'),
	lastName: createOptionFromOptional(string, 'lastName'),
	userContact: createOptionFromOptional(string, 'userContact'),
	email: createOptionFromOptional(string, 'email'),
	phone: createOptionFromOptional(string, 'phone'),
	note: createOptionFromOptional(string, 'note'),
	referredByName: createOptionFromOptional(string, 'referredByName'),
	referredByEmail: createOptionFromOptional(string, 'referredByEmail'),
	referredByPhone: createOptionFromOptional(string, 'referredByPhone'),
});
