import { Option } from 'fp-ts/lib/Option';
import { string, keyof, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsSharedReferralModel = {
	referToUserId: Option<string>;
	referralType: Option<'Borrower' | 'Agent'>;
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
	referToUserId: createOptionFromNullable(string, 'referToUserId'),
	referralType: createOptionFromNullable(keyof({ Borrower: null, Agent: null }), 'referralType'),
	firstName: createOptionFromNullable(string, 'firstName'),
	lastName: createOptionFromNullable(string, 'lastName'),
	userContact: createOptionFromNullable(string, 'userContact'),
	email: createOptionFromNullable(string, 'email'),
	phone: createOptionFromNullable(string, 'phone'),
	note: createOptionFromNullable(string, 'note'),
	referredByName: createOptionFromNullable(string, 'referredByName'),
	referredByEmail: createOptionFromNullable(string, 'referredByEmail'),
	referredByPhone: createOptionFromNullable(string, 'referredByPhone'),
});
