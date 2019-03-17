import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, union, literal, type } from 'io-ts';
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
	borrowerId: createOptionFromNullable(number),
	companyId: createOptionFromNullable(number),
	creditScore: createOptionFromNullable(number),
	firstName: createOptionFromNullable(string),
	lastName: createOptionFromNullable(string),
	last4Ssn: createOptionFromNullable(string),
	userId: createOptionFromNullable(string),
	phone: createOptionFromNullable(string),
	email: createOptionFromNullable(string),
	isRegister: createOptionFromNullable(boolean),
	isInvited: createOptionFromNullable(boolean),
	isPrimary: createOptionFromNullable(boolean),
	isPortalMerged: createOptionFromNullable(boolean),
	applicationId: createOptionFromNullable(number),
	lastTimeLogin: createOptionFromNullable(DateFromISOString),
	birthDate: createOptionFromNullable(DateFromISOString),
	mailingStreet: createOptionFromNullable(string),
	mailingCity: createOptionFromNullable(string),
	mailingState: createOptionFromNullable(string),
	mailingZip: createOptionFromNullable(string),
	borrowerContact: createOptionFromNullable(string),
	creditMonitoringStatus: createOptionFromNullable(union([literal('Unset'), literal('Active'), literal('Disabled')])),
	dateCreateBorrower: createOptionFromNullable(DateFromISOString),
});
