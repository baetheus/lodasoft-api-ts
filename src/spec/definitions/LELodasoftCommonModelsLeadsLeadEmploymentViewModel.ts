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
	leadEmploymentId: createOptionFromNullable(number),
	leadId: createOptionFromNullable(number),
	companyName: createOptionFromNullable(string),
	position: createOptionFromNullable(string),
	employmentLengthYears: createOptionFromNullable(number),
	monthlyIncome: createOptionFromNullable(number),
	isCurrentEmployer: createOptionFromNullable(boolean),
	notes: createOptionFromNullable(string),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
