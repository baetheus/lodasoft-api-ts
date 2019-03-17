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
	messageId: createOptionFromNullable(number),
	applicationId: createOptionFromNullable(number),
	loanDocTaskId: createOptionFromNullable(number),
	borrowerId: createOptionFromNullable(number),
	userId: createOptionFromNullable(string),
	content: createOptionFromNullable(string),
	flagInternalMessage: createOptionFromNullable(boolean),
	postTime: createOptionFromNullable(DateFromISOString),
	senderId: createOptionFromNullable(string),
	senderFirstName: createOptionFromNullable(string),
	senderLastName: createOptionFromNullable(string),
	senderAvatar: createOptionFromNullable(string),
	notifyPartyId: createOptionFromNullable(array(string)),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
