import { Option } from 'fp-ts/lib/Option';
import { number, string, array, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsLeadsLeadListViewModel = {
	leadListId: Option<number>;
	name: Option<string>;
	description: Option<string>;
	leadIds: Option<Array<number>>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsLeadsLeadListViewModelIO = type({
	leadListId: createOptionFromOptional(number, 'leadListId'),
	name: createOptionFromOptional(string, 'name'),
	description: createOptionFromOptional(string, 'description'),
	leadIds: createOptionFromOptional(array(number), 'leadIds'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
