import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import { createEnumType } from '../utils/utils';

export enum MsgTypeEnum {
	'Unspecified',
	'UserInvite',
	'BorrowerInvite',
	'AgentInvite',
	'ForgotPassword',
	'DocRequest',
	'DocReject',
	'DocAccepted',
	'StatusUpdate',
	'Reminder',
	'ApplicationEmailCampaign',
	'ContactEmailCampaign',
	'NewMessage',
	'UserCreatedEmail',
	'UserCreatedSms',
	'Test',
	'AppointmentAlert',
	'Referral',
	'CombinedParent',
}

export enum DeliveryEnum {
	'Unspecified',
	'Email',
	'SMS',
	'Toaster',
}

export enum PriorityEnum {
	'Unspecified',
	'Immediate',
	'Queue',
	'QueuedImmediate',
	'Retry',
}

export enum StatusEnum {
	'Unprocessed',
	'InProcess',
	'FailureSmsNotEnabled',
	'Failure',
	'Success',
	'CombinedChild',
}

export type LELodasoftCommonModelsMessageMessageViewModel = {
	id: Option<number>;
	campaignId: Option<number>;
	automatedEmailId: Option<number>;
	applicationId: Option<number>;
	borrowerId: Option<number>;
	agentId: Option<number>;
	eventId: Option<number>;
	leadId: Option<number>;
	fromUserId: Option<string>;
	msgType: Option<MsgTypeEnum>;
	delivery: Option<DeliveryEnum>;
	priority: Option<PriorityEnum>;
	status: Option<StatusEnum>;
	to: Option<string>;
	from: Option<string>;
	cc: Option<string>;
	bcc: Option<string>;
	subject: Option<string>;
	body: Option<string>;
	trackingGuid: Option<string>;
	originalOpenDate: Option<Date>;
	mostRecentOpenDate: Option<Date>;
	createDate: Option<Date>;
	lastUpdate: Option<Date>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsMessageMessageViewModelIO = type({
	id: createOptionFromNullable(number, 'id'),
	campaignId: createOptionFromNullable(number, 'campaignId'),
	automatedEmailId: createOptionFromNullable(number, 'automatedEmailId'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	agentId: createOptionFromNullable(number, 'agentId'),
	eventId: createOptionFromNullable(number, 'eventId'),
	leadId: createOptionFromNullable(number, 'leadId'),
	fromUserId: createOptionFromNullable(string, 'fromUserId'),
	msgType: createOptionFromNullable(createEnumType<MsgTypeEnum>(MsgTypeEnum, 'MsgTypeEnum'), 'msgType'),
	delivery: createOptionFromNullable(createEnumType<DeliveryEnum>(DeliveryEnum, 'DeliveryEnum'), 'delivery'),
	priority: createOptionFromNullable(createEnumType<PriorityEnum>(PriorityEnum, 'PriorityEnum'), 'priority'),
	status: createOptionFromNullable(createEnumType<StatusEnum>(StatusEnum, 'StatusEnum'), 'status'),
	to: createOptionFromNullable(string, 'to'),
	from: createOptionFromNullable(string, 'from'),
	cc: createOptionFromNullable(string, 'cc'),
	bcc: createOptionFromNullable(string, 'bcc'),
	subject: createOptionFromNullable(string, 'subject'),
	body: createOptionFromNullable(string, 'body'),
	trackingGuid: createOptionFromNullable(string, 'trackingGuid'),
	originalOpenDate: createOptionFromNullable(DateFromISOString, 'originalOpenDate'),
	mostRecentOpenDate: createOptionFromNullable(DateFromISOString, 'mostRecentOpenDate'),
	createDate: createOptionFromNullable(DateFromISOString, 'createDate'),
	lastUpdate: createOptionFromNullable(DateFromISOString, 'lastUpdate'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
