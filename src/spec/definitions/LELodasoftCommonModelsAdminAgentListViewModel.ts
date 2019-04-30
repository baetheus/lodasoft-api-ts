import { Option } from 'fp-ts/lib/Option';
import { number, string, array, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsAdminAgentListViewModel = {
	agentListId: Option<number>;
	name: Option<string>;
	description: Option<string>;
	agentIds: Option<Array<number>>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsAdminAgentListViewModelIO = type({
	agentListId: createOptionFromNullable(number, 'agentListId'),
	name: createOptionFromNullable(string, 'name'),
	description: createOptionFromNullable(string, 'description'),
	agentIds: createOptionFromNullable(array(number), 'agentIds'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
