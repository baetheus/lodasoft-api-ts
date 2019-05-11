import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
	leadEventId: createOptionFromOptional(number, 'leadEventId'),
	leadId: createOptionFromOptional(number, 'leadId'),
	leadStatusId: createOptionFromOptional(number, 'leadStatusId'),
	createdByUserId: createOptionFromOptional(string, 'createdByUserId'),
	type: createOptionFromOptional(string, 'type'),
	note: createOptionFromOptional(string, 'note'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
