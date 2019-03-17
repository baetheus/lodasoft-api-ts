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
	agentListId: createOptionFromNullable(number),
	name: createOptionFromNullable(string),
	description: createOptionFromNullable(string),
	agentIds: createOptionFromNullable(array(number)),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
