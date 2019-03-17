import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, union, literal, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsAdminBorrowerModel = {
	borrowerId: Option<number>;
	userId: Option<string>;
	firstName: Option<string>;
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
	borrowerId: createOptionFromNullable(number),
	userId: createOptionFromNullable(string),
	firstName: createOptionFromNullable(string),
	lastName: createOptionFromNullable(string),
	birthDate: createOptionFromNullable(DateFromISOString),
	socialSecNum: createOptionFromNullable(string),
	borrowerContact: createOptionFromNullable(string),
	creditScore: createOptionFromNullable(number),
	alertViaSms: createOptionFromNullable(boolean),
	mobilePhone: createOptionFromNullable(string),
	workPhone: createOptionFromNullable(string),
	extPhone: createOptionFromNullable(string),
	fax: createOptionFromNullable(string),
	email: createOptionFromNullable(string),
	assistantName: createOptionFromNullable(string),
	assistantPhone: createOptionFromNullable(string),
	doNotCall: createOptionFromNullable(boolean),
	doNotEmail: createOptionFromNullable(boolean),
	mailingStreet: createOptionFromNullable(string),
	mailingPOBox: createOptionFromNullable(string),
	mailingCity: createOptionFromNullable(string),
	mailingState: createOptionFromNullable(string),
	mailingZip: createOptionFromNullable(string),
	dateCreateBorrower: createOptionFromNullable(DateFromISOString),
	creditMonitoringStatus: createOptionFromNullable(union([literal('Unset'), literal('Active'), literal('Disabled')])),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
