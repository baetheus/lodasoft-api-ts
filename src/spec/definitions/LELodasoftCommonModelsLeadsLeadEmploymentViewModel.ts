import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsLeadsLeadEmploymentViewModel = {
	leadEmploymentId: Option<number>;
	leadId: Option<number>;
	companyName: Option<string>;
	position: Option<string>;
	employmentLengthYears: Option<number>;
	monthlyIncome: Option<number>;
	isCurrentEmployer: Option<boolean>;
	notes: Option<string>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsLeadsLeadEmploymentViewModelIO = type({
	leadEmploymentId: createOptionFromNullable(number, 'leadEmploymentId'),
	leadId: createOptionFromNullable(number, 'leadId'),
	companyName: createOptionFromNullable(string, 'companyName'),
	position: createOptionFromNullable(string, 'position'),
	employmentLengthYears: createOptionFromNullable(number, 'employmentLengthYears'),
	monthlyIncome: createOptionFromNullable(number, 'monthlyIncome'),
	isCurrentEmployer: createOptionFromNullable(boolean, 'isCurrentEmployer'),
	notes: createOptionFromNullable(string, 'notes'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
