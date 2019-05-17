import { Option } from 'fp-ts/lib/Option';
import { number, string, array, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	agentListId: createOptionFromOptional(number, 'agentListId'),
	name: createOptionFromOptional(string, 'name'),
	description: createOptionFromOptional(string, 'description'),
	agentIds: createOptionFromOptional(array(number), 'agentIds'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromDatelike, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromDatelike, 'dateUpdated'),
});
