import { Option } from 'fp-ts/lib/Option';
import { string, number, keyof, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

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
	msgType: Option<
		| 'Unspecified'
		| 'UserInvite'
		| 'BorrowerInvite'
		| 'AgentInvite'
		| 'ForgotPassword'
		| 'DocRequest'
		| 'DocReject'
		| 'DocAccepted'
		| 'StatusUpdate'
		| 'Reminder'
		| 'ApplicationEmailCampaign'
		| 'ContactEmailCampaign'
		| 'NewMessage'
		| 'UserCreatedEmail'
		| 'UserCreatedSms'
		| 'Test'
		| 'AppointmentAlert'
		| 'Referral'
		| 'CombinedParent'
	>;
	delivery: Option<'Unspecified' | 'Email' | 'SMS' | 'Toaster'>;
	priority: Option<'Unspecified' | 'Immediate' | 'Queue' | 'QueuedImmediate' | 'Retry'>;
	status: Option<'Unprocessed' | 'InProcess' | 'FailureSmsNotEnabled' | 'Failure' | 'Success' | 'CombinedChild'>;
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
	extendedDetail: createOptionFromNullable(string, 'extendedDetail'),
	id: createOptionFromNullable(number, 'id'),
	campaignId: createOptionFromNullable(number, 'campaignId'),
	automatedEmailId: createOptionFromNullable(number, 'automatedEmailId'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	agentId: createOptionFromNullable(number, 'agentId'),
	eventId: createOptionFromNullable(number, 'eventId'),
	leadId: createOptionFromNullable(number, 'leadId'),
	fromUserId: createOptionFromNullable(string, 'fromUserId'),
	msgType: createOptionFromNullable(
		keyof({
			Unspecified: null,
			UserInvite: null,
			BorrowerInvite: null,
			AgentInvite: null,
			ForgotPassword: null,
			DocRequest: null,
			DocReject: null,
			DocAccepted: null,
			StatusUpdate: null,
			Reminder: null,
			ApplicationEmailCampaign: null,
			ContactEmailCampaign: null,
			NewMessage: null,
			UserCreatedEmail: null,
			UserCreatedSms: null,
			Test: null,
			AppointmentAlert: null,
			Referral: null,
			CombinedParent: null,
		}),
		'msgType',
	),
	delivery: createOptionFromNullable(keyof({ Unspecified: null, Email: null, SMS: null, Toaster: null }), 'delivery'),
	priority: createOptionFromNullable(
		keyof({ Unspecified: null, Immediate: null, Queue: null, QueuedImmediate: null, Retry: null }),
		'priority',
	),
	status: createOptionFromNullable(
		keyof({
			Unprocessed: null,
			InProcess: null,
			FailureSmsNotEnabled: null,
			Failure: null,
			Success: null,
			CombinedChild: null,
		}),
		'status',
	),
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
