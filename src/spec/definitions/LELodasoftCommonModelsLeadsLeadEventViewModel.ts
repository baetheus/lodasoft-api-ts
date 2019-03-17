import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsLeadsLeadEventViewModel = {
	leadEventId: Option<number>;
	leadId: Option<number>;
	leadStatusId: Option<number>;
	createdByUserId: Option<string>;
	type: Option<string>;
	note: Option<string>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsLeadsLeadEventViewModelIO = type({
	leadEventId: createOptionFromNullable(number),
	leadId: createOptionFromNullable(number),
	leadStatusId: createOptionFromNullable(number),
	createdByUserId: createOptionFromNullable(string),
	type: createOptionFromNullable(string),
	note: createOptionFromNullable(string),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
