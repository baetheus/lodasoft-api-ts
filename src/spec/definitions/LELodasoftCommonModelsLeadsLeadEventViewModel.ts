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
	leadEventId: createOptionFromNullable(number, 'leadEventId'),
	leadId: createOptionFromNullable(number, 'leadId'),
	leadStatusId: createOptionFromNullable(number, 'leadStatusId'),
	createdByUserId: createOptionFromNullable(string, 'createdByUserId'),
	type: createOptionFromNullable(string, 'type'),
	note: createOptionFromNullable(string, 'note'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
