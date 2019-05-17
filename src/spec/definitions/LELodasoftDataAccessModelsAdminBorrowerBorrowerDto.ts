import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

import { createEnumType } from '@nll/utils-ts/lib/io';

export enum CreditMonitoringStatusEnum {
	'Unset',
	'Active',
	'Disabled',
}

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
	creditMonitoringStatus: Option<CreditMonitoringStatusEnum>;
	dateCreateBorrower: Option<Date>;
};
export const LELodasoftDataAccessModelsAdminBorrowerBorrowerDtoIO = type({
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	companyId: createOptionFromOptional(number, 'companyId'),
	creditScore: createOptionFromOptional(number, 'creditScore'),
	firstName: createOptionFromOptional(string, 'firstName'),
	lastName: createOptionFromOptional(string, 'lastName'),
	last4Ssn: createOptionFromOptional(string, 'last4Ssn'),
	userId: createOptionFromOptional(string, 'userId'),
	phone: createOptionFromOptional(string, 'phone'),
	email: createOptionFromOptional(string, 'email'),
	isRegister: createOptionFromOptional(boolean, 'isRegister'),
	isInvited: createOptionFromOptional(boolean, 'isInvited'),
	isPrimary: createOptionFromOptional(boolean, 'isPrimary'),
	isPortalMerged: createOptionFromOptional(boolean, 'isPortalMerged'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	lastTimeLogin: createOptionFromOptional(DateFromDatelike, 'lastTimeLogin'),
	birthDate: createOptionFromOptional(DateFromDatelike, 'birthDate'),
	mailingStreet: createOptionFromOptional(string, 'mailingStreet'),
	mailingCity: createOptionFromOptional(string, 'mailingCity'),
	mailingState: createOptionFromOptional(string, 'mailingState'),
	mailingZip: createOptionFromOptional(string, 'mailingZip'),
	borrowerContact: createOptionFromOptional(string, 'borrowerContact'),
	creditMonitoringStatus: createOptionFromOptional(
		createEnumType<CreditMonitoringStatusEnum>(CreditMonitoringStatusEnum, 'CreditMonitoringStatusEnum'),
		'creditMonitoringStatus',
	),
	dateCreateBorrower: createOptionFromOptional(DateFromDatelike, 'dateCreateBorrower'),
});
