import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import { createEnumType } from '../utils/utils';

export enum UserTypeEnum {
	'Admin',
	'Borrower',
	'Agent',
}

export type LELodasoftCommonModelsLeadsUserProfileViewModel = {
	id: Option<string>;
	companyId: Option<number>;
	stackOrderId: Option<number>;
	roleId: Option<number>;
	userName: Option<string>;
	userType: Option<UserTypeEnum>;
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
	id: createOptionFromNullable(string, 'id'),
	companyId: createOptionFromNullable(number, 'companyId'),
	stackOrderId: createOptionFromNullable(number, 'stackOrderId'),
	roleId: createOptionFromNullable(number, 'roleId'),
	userName: createOptionFromNullable(string, 'userName'),
	userType: createOptionFromNullable(createEnumType<UserTypeEnum>(UserTypeEnum, 'UserTypeEnum'), 'userType'),
	avatarId: createOptionFromNullable(string, 'avatarId'),
	firstName: createOptionFromNullable(string, 'firstName'),
	lastName: createOptionFromNullable(string, 'lastName'),
	timeZone: createOptionFromNullable(string, 'timeZone'),
	title: createOptionFromNullable(string, 'title'),
	nmls: createOptionFromNullable(string, 'nmls'),
	emailSignature: createOptionFromNullable(string, 'emailSignature'),
	smsSignature: createOptionFromNullable(string, 'smsSignature'),
	flagAdmin: createOptionFromNullable(boolean, 'flagAdmin'),
	reportTo: createOptionFromNullable(string, 'reportTo'),
	inviteDate: createOptionFromNullable(DateFromISOString, 'inviteDate'),
	confirmationDate: createOptionFromNullable(DateFromISOString, 'confirmationDate'),
	twoFactorEnabled: createOptionFromNullable(boolean, 'twoFactorEnabled'),
	email: createOptionFromNullable(string, 'email'),
	emailConfirmed: createOptionFromNullable(boolean, 'emailConfirmed'),
	phoneNumber: createOptionFromNullable(string, 'phoneNumber'),
	phoneNumberConfirmed: createOptionFromNullable(boolean, 'phoneNumberConfirmed'),
	cellPhone: createOptionFromNullable(string, 'cellPhone'),
	workPhone: createOptionFromNullable(string, 'workPhone'),
	homePhone: createOptionFromNullable(string, 'homePhone'),
	fax: createOptionFromNullable(string, 'fax'),
	mailingStreet: createOptionFromNullable(string, 'mailingStreet'),
	mailingPOBox: createOptionFromNullable(string, 'mailingPOBox'),
	mailingCity: createOptionFromNullable(string, 'mailingCity'),
	mailingState: createOptionFromNullable(string, 'mailingState'),
	mailingZip: createOptionFromNullable(string, 'mailingZip'),
	active: createOptionFromNullable(boolean, 'active'),
});
