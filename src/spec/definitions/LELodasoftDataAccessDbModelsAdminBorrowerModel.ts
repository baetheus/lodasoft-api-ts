import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, keyof, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

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
	creditMonitoringStatus: Option<'Unset' | 'Active' | 'Disabled'>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftDataAccessDbModelsAdminBorrowerModelIO = type({
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	userId: createOptionFromNullable(string, 'userId'),
	firstName: createOptionFromNullable(string, 'firstName'),
	middleName: createOptionFromNullable(string, 'middleName'),
	lastName: createOptionFromNullable(string, 'lastName'),
	birthDate: createOptionFromNullable(DateFromISOString, 'birthDate'),
	socialSecNum: createOptionFromNullable(string, 'socialSecNum'),
	borrowerContact: createOptionFromNullable(string, 'borrowerContact'),
	creditScore: createOptionFromNullable(number, 'creditScore'),
	alertViaSms: createOptionFromNullable(boolean, 'alertViaSms'),
	mobilePhone: createOptionFromNullable(string, 'mobilePhone'),
	workPhone: createOptionFromNullable(string, 'workPhone'),
	extPhone: createOptionFromNullable(string, 'extPhone'),
	fax: createOptionFromNullable(string, 'fax'),
	email: createOptionFromNullable(string, 'email'),
	assistantName: createOptionFromNullable(string, 'assistantName'),
	assistantPhone: createOptionFromNullable(string, 'assistantPhone'),
	doNotCall: createOptionFromNullable(boolean, 'doNotCall'),
	doNotEmail: createOptionFromNullable(boolean, 'doNotEmail'),
	mailingStreet: createOptionFromNullable(string, 'mailingStreet'),
	mailingPOBox: createOptionFromNullable(string, 'mailingPOBox'),
	mailingCity: createOptionFromNullable(string, 'mailingCity'),
	mailingState: createOptionFromNullable(string, 'mailingState'),
	mailingZip: createOptionFromNullable(string, 'mailingZip'),
	dateCreateBorrower: createOptionFromNullable(DateFromISOString, 'dateCreateBorrower'),
	creditMonitoringStatus: createOptionFromNullable(
		keyof({ Unset: null, Active: null, Disabled: null }),
		'creditMonitoringStatus',
	),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
