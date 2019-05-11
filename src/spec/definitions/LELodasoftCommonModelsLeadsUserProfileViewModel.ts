import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
	id: createOptionFromOptional(string, 'id'),
	companyId: createOptionFromOptional(number, 'companyId'),
	stackOrderId: createOptionFromOptional(number, 'stackOrderId'),
	roleId: createOptionFromOptional(number, 'roleId'),
	userName: createOptionFromOptional(string, 'userName'),
	userType: createOptionFromOptional(createEnumType<UserTypeEnum>(UserTypeEnum, 'UserTypeEnum'), 'userType'),
	avatarId: createOptionFromOptional(string, 'avatarId'),
	firstName: createOptionFromOptional(string, 'firstName'),
	lastName: createOptionFromOptional(string, 'lastName'),
	timeZone: createOptionFromOptional(string, 'timeZone'),
	title: createOptionFromOptional(string, 'title'),
	nmls: createOptionFromOptional(string, 'nmls'),
	emailSignature: createOptionFromOptional(string, 'emailSignature'),
	smsSignature: createOptionFromOptional(string, 'smsSignature'),
	flagAdmin: createOptionFromOptional(boolean, 'flagAdmin'),
	reportTo: createOptionFromOptional(string, 'reportTo'),
	inviteDate: createOptionFromOptional(DateFromISOString, 'inviteDate'),
	confirmationDate: createOptionFromOptional(DateFromISOString, 'confirmationDate'),
	twoFactorEnabled: createOptionFromOptional(boolean, 'twoFactorEnabled'),
	email: createOptionFromOptional(string, 'email'),
	emailConfirmed: createOptionFromOptional(boolean, 'emailConfirmed'),
	phoneNumber: createOptionFromOptional(string, 'phoneNumber'),
	phoneNumberConfirmed: createOptionFromOptional(boolean, 'phoneNumberConfirmed'),
	cellPhone: createOptionFromOptional(string, 'cellPhone'),
	workPhone: createOptionFromOptional(string, 'workPhone'),
	homePhone: createOptionFromOptional(string, 'homePhone'),
	fax: createOptionFromOptional(string, 'fax'),
	mailingStreet: createOptionFromOptional(string, 'mailingStreet'),
	mailingPOBox: createOptionFromOptional(string, 'mailingPOBox'),
	mailingCity: createOptionFromOptional(string, 'mailingCity'),
	mailingState: createOptionFromOptional(string, 'mailingState'),
	mailingZip: createOptionFromOptional(string, 'mailingZip'),
	active: createOptionFromOptional(boolean, 'active'),
});
