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
	messageId: createOptionFromNullable(number, 'messageId'),
	agentId: createOptionFromNullable(number, 'agentId'),
	userId: createOptionFromNullable(string, 'userId'),
	content: createOptionFromNullable(string, 'content'),
	postTime: createOptionFromNullable(DateFromISOString, 'postTime'),
	userFirstName: createOptionFromNullable(string, 'userFirstName'),
	userLastName: createOptionFromNullable(string, 'userLastName'),
	userAvatar: createOptionFromNullable(string, 'userAvatar'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
