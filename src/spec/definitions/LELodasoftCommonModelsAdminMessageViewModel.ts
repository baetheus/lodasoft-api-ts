import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, array, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	messageId: createOptionFromOptional(number, 'messageId'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	loanDocTaskId: createOptionFromOptional(number, 'loanDocTaskId'),
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	userId: createOptionFromOptional(string, 'userId'),
	content: createOptionFromOptional(string, 'content'),
	flagInternalMessage: createOptionFromOptional(boolean, 'flagInternalMessage'),
	postTime: createOptionFromOptional(DateFromISOString, 'postTime'),
	senderId: createOptionFromOptional(string, 'senderId'),
	senderFirstName: createOptionFromOptional(string, 'senderFirstName'),
	senderLastName: createOptionFromOptional(string, 'senderLastName'),
	senderAvatar: createOptionFromOptional(string, 'senderAvatar'),
	notifyPartyId: createOptionFromOptional(array(string), 'notifyPartyId'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
