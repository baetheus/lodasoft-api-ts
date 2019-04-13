import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsAdminAgentNoteViewModel = {
	messageId: Option<number>;
	agentId: Option<number>;
	userId: Option<string>;
	content: Option<string>;
	postTime: Option<Date>;
	userFirstName: Option<string>;
	userLastName: Option<string>;
	userAvatar: Option<string>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsAdminAgentNoteViewModelIO = type({
	messageId: createOptionFromNullable(number),
	agentId: createOptionFromNullable(number),
	userId: createOptionFromNullable(string),
	content: createOptionFromNullable(string),
	postTime: createOptionFromNullable(DateFromISOString),
	userFirstName: createOptionFromNullable(string),
	userLastName: createOptionFromNullable(string),
	userAvatar: createOptionFromNullable(string),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
