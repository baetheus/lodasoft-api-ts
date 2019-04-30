import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, keyof, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftDataAccessModelsAdminBorrowerBorrowerDto = {
	borrowerId: Option<number>;
	companyId: Option<number>;
	creditScore: Option<number>;
	firstName: Option<string>;
	lastName: Option<string>;
	last4Ssn: Option<string>;
	userId: Option<string>;
	phone: Option<string>;
	email: Option<string>;
	isRegister: Option<boolean>;
	isInvited: Option<boolean>;
	isPrimary: Option<boolean>;
	isPortalMerged: Option<boolean>;
	applicationId: Option<number>;
	lastTimeLogin: Option<Date>;
	birthDate: Option<Date>;
	mailingStreet: Option<string>;
	mailingCity: Option<string>;
	mailingState: Option<string>;
	mailingZip: Option<string>;
	borrowerContact: Option<string>;
	creditMonitoringStatus: Option<'Unset' | 'Active' | 'Disabled'>;
	dateCreateBorrower: Option<Date>;
};
export const LELodasoftDataAccessModelsAdminBorrowerBorrowerDtoIO = type({
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	companyId: createOptionFromNullable(number, 'companyId'),
	creditScore: createOptionFromNullable(number, 'creditScore'),
	firstName: createOptionFromNullable(string, 'firstName'),
	lastName: createOptionFromNullable(string, 'lastName'),
	last4Ssn: createOptionFromNullable(string, 'last4Ssn'),
	userId: createOptionFromNullable(string, 'userId'),
	phone: createOptionFromNullable(string, 'phone'),
	email: createOptionFromNullable(string, 'email'),
	isRegister: createOptionFromNullable(boolean, 'isRegister'),
	isInvited: createOptionFromNullable(boolean, 'isInvited'),
	isPrimary: createOptionFromNullable(boolean, 'isPrimary'),
	isPortalMerged: createOptionFromNullable(boolean, 'isPortalMerged'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	lastTimeLogin: createOptionFromNullable(DateFromISOString, 'lastTimeLogin'),
	birthDate: createOptionFromNullable(DateFromISOString, 'birthDate'),
	mailingStreet: createOptionFromNullable(string, 'mailingStreet'),
	mailingCity: createOptionFromNullable(string, 'mailingCity'),
	mailingState: createOptionFromNullable(string, 'mailingState'),
	mailingZip: createOptionFromNullable(string, 'mailingZip'),
	borrowerContact: createOptionFromNullable(string, 'borrowerContact'),
	creditMonitoringStatus: createOptionFromNullable(
		keyof({ Unset: null, Active: null, Disabled: null }),
		'creditMonitoringStatus',
	),
	dateCreateBorrower: createOptionFromNullable(DateFromISOString, 'dateCreateBorrower'),
});
