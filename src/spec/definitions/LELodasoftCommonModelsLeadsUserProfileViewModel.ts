import { Option } from 'fp-ts/lib/Option';
import { string, number, keyof, boolean, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsLeadsUserProfileViewModel = {
	id: Option<string>;
	companyId: Option<number>;
	stackOrderId: Option<number>;
	roleId: Option<number>;
	userName: Option<string>;
	userType: Option<'Admin' | 'Borrower' | 'Agent'>;
	avatarId: Option<string>;
	firstName: Option<string>;
	lastName: Option<string>;
	timeZone: Option<string>;
	title: Option<string>;
	nmls: Option<string>;
	emailSignature: Option<string>;
	smsSignature: Option<string>;
	flagAdmin: Option<boolean>;
	reportTo: Option<string>;
	inviteDate: Option<Date>;
	confirmationDate: Option<Date>;
	twoFactorEnabled: Option<boolean>;
	email: Option<string>;
	emailConfirmed: Option<boolean>;
	phoneNumber: Option<string>;
	phoneNumberConfirmed: Option<boolean>;
	cellPhone: Option<string>;
	workPhone: Option<string>;
	homePhone: Option<string>;
	fax: Option<string>;
	mailingStreet: Option<string>;
	mailingPOBox: Option<string>;
	mailingCity: Option<string>;
	mailingState: Option<string>;
	mailingZip: Option<string>;
	active: Option<boolean>;
};
export const LELodasoftCommonModelsLeadsUserProfileViewModelIO = type({
	id: createOptionFromNullable(string),
	companyId: createOptionFromNullable(number),
	stackOrderId: createOptionFromNullable(number),
	roleId: createOptionFromNullable(number),
	userName: createOptionFromNullable(string),
	userType: createOptionFromNullable(keyof({ Admin: null, Borrower: null, Agent: null })),
	avatarId: createOptionFromNullable(string),
	firstName: createOptionFromNullable(string),
	lastName: createOptionFromNullable(string),
	timeZone: createOptionFromNullable(string),
	title: createOptionFromNullable(string),
	nmls: createOptionFromNullable(string),
	emailSignature: createOptionFromNullable(string),
	smsSignature: createOptionFromNullable(string),
	flagAdmin: createOptionFromNullable(boolean),
	reportTo: createOptionFromNullable(string),
	inviteDate: createOptionFromNullable(DateFromISOString),
	confirmationDate: createOptionFromNullable(DateFromISOString),
	twoFactorEnabled: createOptionFromNullable(boolean),
	email: createOptionFromNullable(string),
	emailConfirmed: createOptionFromNullable(boolean),
	phoneNumber: createOptionFromNullable(string),
	phoneNumberConfirmed: createOptionFromNullable(boolean),
	cellPhone: createOptionFromNullable(string),
	workPhone: createOptionFromNullable(string),
	homePhone: createOptionFromNullable(string),
	fax: createOptionFromNullable(string),
	mailingStreet: createOptionFromNullable(string),
	mailingPOBox: createOptionFromNullable(string),
	mailingCity: createOptionFromNullable(string),
	mailingState: createOptionFromNullable(string),
	mailingZip: createOptionFromNullable(string),
	active: createOptionFromNullable(boolean),
});
