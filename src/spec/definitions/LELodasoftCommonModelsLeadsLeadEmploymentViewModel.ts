import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
	leadEmploymentId: createOptionFromOptional(number, 'leadEmploymentId'),
	leadId: createOptionFromOptional(number, 'leadId'),
	companyName: createOptionFromOptional(string, 'companyName'),
	position: createOptionFromOptional(string, 'position'),
	employmentLengthYears: createOptionFromOptional(number, 'employmentLengthYears'),
	monthlyIncome: createOptionFromOptional(number, 'monthlyIncome'),
	isCurrentEmployer: createOptionFromOptional(boolean, 'isCurrentEmployer'),
	notes: createOptionFromOptional(string, 'notes'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
