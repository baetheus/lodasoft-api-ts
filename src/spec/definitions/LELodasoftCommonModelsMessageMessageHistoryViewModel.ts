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
	extendedDetail: createOptionFromNullable(string),
	id: createOptionFromNullable(number),
	campaignId: createOptionFromNullable(number),
	automatedEmailId: createOptionFromNullable(number),
	applicationId: createOptionFromNullable(number),
	borrowerId: createOptionFromNullable(number),
	agentId: createOptionFromNullable(number),
	eventId: createOptionFromNullable(number),
	leadId: createOptionFromNullable(number),
	fromUserId: createOptionFromNullable(string),
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
	),
	delivery: createOptionFromNullable(keyof({ Unspecified: null, Email: null, SMS: null, Toaster: null })),
	priority: createOptionFromNullable(
		keyof({ Unspecified: null, Immediate: null, Queue: null, QueuedImmediate: null, Retry: null }),
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
	),
	to: createOptionFromNullable(string),
	from: createOptionFromNullable(string),
	cc: createOptionFromNullable(string),
	bcc: createOptionFromNullable(string),
	subject: createOptionFromNullable(string),
	body: createOptionFromNullable(string),
	trackingGuid: createOptionFromNullable(string),
	originalOpenDate: createOptionFromNullable(DateFromISOString),
	mostRecentOpenDate: createOptionFromNullable(DateFromISOString),
	createDate: createOptionFromNullable(DateFromISOString),
	lastUpdate: createOptionFromNullable(DateFromISOString),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
