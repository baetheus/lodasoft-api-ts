import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, array, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsAdminMessageViewModel = {
	messageId: Option<number>;
	applicationId: Option<number>;
	loanDocTaskId: Option<number>;
	borrowerId: Option<number>;
	userId: Option<string>;
	content: Option<string>;
	flagInternalMessage: Option<boolean>;
	postTime: Option<Date>;
	senderId: Option<string>;
	senderFirstName: Option<string>;
	senderLastName: Option<string>;
	senderAvatar: Option<string>;
	notifyPartyId: Option<Array<string>>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsAdminMessageViewModelIO = type({
	messageId: createOptionFromNullable(number, 'messageId'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	loanDocTaskId: createOptionFromNullable(number, 'loanDocTaskId'),
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	userId: createOptionFromNullable(string, 'userId'),
	content: createOptionFromNullable(string, 'content'),
	flagInternalMessage: createOptionFromNullable(boolean, 'flagInternalMessage'),
	postTime: createOptionFromNullable(DateFromISOString, 'postTime'),
	senderId: createOptionFromNullable(string, 'senderId'),
	senderFirstName: createOptionFromNullable(string, 'senderFirstName'),
	senderLastName: createOptionFromNullable(string, 'senderLastName'),
	senderAvatar: createOptionFromNullable(string, 'senderAvatar'),
	notifyPartyId: createOptionFromNullable(array(string), 'notifyPartyId'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
