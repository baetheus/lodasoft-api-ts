import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	messageId: createOptionFromOptional(number, 'messageId'),
	agentId: createOptionFromOptional(number, 'agentId'),
	userId: createOptionFromOptional(string, 'userId'),
	content: createOptionFromOptional(string, 'content'),
	postTime: createOptionFromOptional(DateFromDatelike, 'postTime'),
	userFirstName: createOptionFromOptional(string, 'userFirstName'),
	userLastName: createOptionFromOptional(string, 'userLastName'),
	userAvatar: createOptionFromOptional(string, 'userAvatar'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromDatelike, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromDatelike, 'dateUpdated'),
});
