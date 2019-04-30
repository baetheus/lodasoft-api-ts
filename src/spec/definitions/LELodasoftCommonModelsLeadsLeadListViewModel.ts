import { Option } from 'fp-ts/lib/Option';
import { number, string, array, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

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
	leadListId: createOptionFromNullable(number, 'leadListId'),
	name: createOptionFromNullable(string, 'name'),
	description: createOptionFromNullable(string, 'description'),
	leadIds: createOptionFromNullable(array(number), 'leadIds'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
