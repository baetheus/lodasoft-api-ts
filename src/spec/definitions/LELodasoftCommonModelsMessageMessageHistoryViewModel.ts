import { createEnumType } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';
import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';

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

export type LELodasoftCommonModelsMessageMessageHistoryViewModel = {
	extendedDetail: Option<string>;
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
export const LELodasoftCommonModelsMessageMessageHistoryViewModelIO = type({
	extendedDetail: createOptionFromOptional(string, 'extendedDetail'),
	id: createOptionFromOptional(number, 'id'),
	campaignId: createOptionFromOptional(number, 'campaignId'),
	automatedEmailId: createOptionFromOptional(number, 'automatedEmailId'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	agentId: createOptionFromOptional(number, 'agentId'),
	eventId: createOptionFromOptional(number, 'eventId'),
	leadId: createOptionFromOptional(number, 'leadId'),
	fromUserId: createOptionFromOptional(string, 'fromUserId'),
	msgType: createOptionFromOptional(createEnumType<MsgTypeEnum>(MsgTypeEnum, 'MsgTypeEnum'), 'msgType'),
	delivery: createOptionFromOptional(createEnumType<DeliveryEnum>(DeliveryEnum, 'DeliveryEnum'), 'delivery'),
	priority: createOptionFromOptional(createEnumType<PriorityEnum>(PriorityEnum, 'PriorityEnum'), 'priority'),
	status: createOptionFromOptional(createEnumType<StatusEnum>(StatusEnum, 'StatusEnum'), 'status'),
	to: createOptionFromOptional(string, 'to'),
	from: createOptionFromOptional(string, 'from'),
	cc: createOptionFromOptional(string, 'cc'),
	bcc: createOptionFromOptional(string, 'bcc'),
	subject: createOptionFromOptional(string, 'subject'),
	body: createOptionFromOptional(string, 'body'),
	trackingGuid: createOptionFromOptional(string, 'trackingGuid'),
	originalOpenDate: createOptionFromOptional(DateFromISOString, 'originalOpenDate'),
	mostRecentOpenDate: createOptionFromOptional(DateFromISOString, 'mostRecentOpenDate'),
	createDate: createOptionFromOptional(DateFromISOString, 'createDate'),
	lastUpdate: createOptionFromOptional(DateFromISOString, 'lastUpdate'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
