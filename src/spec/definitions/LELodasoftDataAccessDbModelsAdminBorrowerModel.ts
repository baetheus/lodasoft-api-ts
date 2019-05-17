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

export type LELodasoftDataAccessDbModelsAdminBorrowerModel = {
	borrowerId: Option<number>;
	userId: Option<string>;
	firstName: Option<string>;
	middleName: Option<string>;
	lastName: Option<string>;
	birthDate: Option<Date>;
	socialSecNum: Option<string>;
	borrowerContact: Option<string>;
	creditScore: Option<number>;
	alertViaSms: Option<boolean>;
	mobilePhone: Option<string>;
	workPhone: Option<string>;
	extPhone: Option<string>;
	fax: Option<string>;
	email: Option<string>;
	assistantName: Option<string>;
	assistantPhone: Option<string>;
	doNotCall: Option<boolean>;
	doNotEmail: Option<boolean>;
	mailingStreet: Option<string>;
	mailingPOBox: Option<string>;
	mailingCity: Option<string>;
	mailingState: Option<string>;
	mailingZip: Option<string>;
	dateCreateBorrower: Option<Date>;
	creditMonitoringStatus: Option<CreditMonitoringStatusEnum>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftDataAccessDbModelsAdminBorrowerModelIO = type({
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	userId: createOptionFromOptional(string, 'userId'),
	firstName: createOptionFromOptional(string, 'firstName'),
	middleName: createOptionFromOptional(string, 'middleName'),
	lastName: createOptionFromOptional(string, 'lastName'),
	birthDate: createOptionFromOptional(DateFromDatelike, 'birthDate'),
	socialSecNum: createOptionFromOptional(string, 'socialSecNum'),
	borrowerContact: createOptionFromOptional(string, 'borrowerContact'),
	creditScore: createOptionFromOptional(number, 'creditScore'),
	alertViaSms: createOptionFromOptional(boolean, 'alertViaSms'),
	mobilePhone: createOptionFromOptional(string, 'mobilePhone'),
	workPhone: createOptionFromOptional(string, 'workPhone'),
	extPhone: createOptionFromOptional(string, 'extPhone'),
	fax: createOptionFromOptional(string, 'fax'),
	email: createOptionFromOptional(string, 'email'),
	assistantName: createOptionFromOptional(string, 'assistantName'),
	assistantPhone: createOptionFromOptional(string, 'assistantPhone'),
	doNotCall: createOptionFromOptional(boolean, 'doNotCall'),
	doNotEmail: createOptionFromOptional(boolean, 'doNotEmail'),
	mailingStreet: createOptionFromOptional(string, 'mailingStreet'),
	mailingPOBox: createOptionFromOptional(string, 'mailingPOBox'),
	mailingCity: createOptionFromOptional(string, 'mailingCity'),
	mailingState: createOptionFromOptional(string, 'mailingState'),
	mailingZip: createOptionFromOptional(string, 'mailingZip'),
	dateCreateBorrower: createOptionFromOptional(DateFromDatelike, 'dateCreateBorrower'),
	creditMonitoringStatus: createOptionFromOptional(
		createEnumType<CreditMonitoringStatusEnum>(CreditMonitoringStatusEnum, 'CreditMonitoringStatusEnum'),
		'creditMonitoringStatus',
	),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromDatelike, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromDatelike, 'dateUpdated'),
});
