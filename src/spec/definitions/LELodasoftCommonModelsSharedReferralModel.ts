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
	referToUserId: createOptionFromNullable(string),
	referralType: createOptionFromNullable(keyof({ Borrower: null, Agent: null })),
	firstName: createOptionFromNullable(string),
	lastName: createOptionFromNullable(string),
	userContact: createOptionFromNullable(string),
	email: createOptionFromNullable(string),
	phone: createOptionFromNullable(string),
	note: createOptionFromNullable(string),
	referredByName: createOptionFromNullable(string),
	referredByEmail: createOptionFromNullable(string),
	referredByPhone: createOptionFromNullable(string),
});
