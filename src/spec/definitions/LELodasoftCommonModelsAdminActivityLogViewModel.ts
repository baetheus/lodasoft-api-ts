import { Option } from 'fp-ts/lib/Option';
import { string, keyof, number, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsAdminActivityLogViewModel = {
	userId: Option<string>;
	category: Option<'LoanChangeStatus' | 'BorrowerMessage' | 'InternalMessage' | 'Lead' | 'DocumentFile'>;
	activityType: Option<
		| 'LoanChangeStatus'
		| 'BorrowerMessage'
		| 'InternalMessage'
		| 'LeadNote'
		| 'LeadEmail'
		| 'LeadSms'
		| 'LeadPhoneAttempt'
		| 'LeadPhoneSuccess'
		| 'ChangeStatus'
		| 'Uploadfile'
		| 'DeleteFile'
		| 'DownloadFile'
		| 'ExportFile'
		| 'FileNoteUpdated'
		| 'BorrowerNoteUpdated'
		| 'DeleteTask'
		| 'RemoveFileFromTrash'
		| 'ConditionStatusChange'
		| 'CreateTask'
		| 'RestoreTask'
		| 'MergeFile'
		| 'PostponeTask'
		| 'ChangeFollowUpDate'
		| 'ChangeDueDate'
		| 'ViewFile'
		| 'FileNameChanged'
		| 'ChangeConditionFlag'
		| 'ChangeDescription'
		| 'ChangeNotifyParty'
		| 'ChangePriority'
		| 'ChangeResponsibleParty'
		| 'ChangeReviewRequired'
		| 'Unknown'
	>;
	displayText: Option<string>;
	dateCreated: Option<Date>;
	loanDocTaskId: Option<number>;
	messageId: Option<number>;
	leadEventId: Option<number>;
	fileId: Option<string>;
	trackingId: Option<number>;
};
export const LELodasoftCommonModelsAdminActivityLogViewModelIO = type({
	userId: createOptionFromNullable(string, 'userId'),
	category: createOptionFromNullable(
		keyof({ LoanChangeStatus: null, BorrowerMessage: null, InternalMessage: null, Lead: null, DocumentFile: null }),
		'category',
	),
	activityType: createOptionFromNullable(
		keyof({
			LoanChangeStatus: null,
			BorrowerMessage: null,
			InternalMessage: null,
			LeadNote: null,
			LeadEmail: null,
			LeadSms: null,
			LeadPhoneAttempt: null,
			LeadPhoneSuccess: null,
			ChangeStatus: null,
			Uploadfile: null,
			DeleteFile: null,
			DownloadFile: null,
			ExportFile: null,
			FileNoteUpdated: null,
			BorrowerNoteUpdated: null,
			DeleteTask: null,
			RemoveFileFromTrash: null,
			ConditionStatusChange: null,
			CreateTask: null,
			RestoreTask: null,
			MergeFile: null,
			PostponeTask: null,
			ChangeFollowUpDate: null,
			ChangeDueDate: null,
			ViewFile: null,
			FileNameChanged: null,
			ChangeConditionFlag: null,
			ChangeDescription: null,
			ChangeNotifyParty: null,
			ChangePriority: null,
			ChangeResponsibleParty: null,
			ChangeReviewRequired: null,
			Unknown: null,
		}),
		'activityType',
	),
	displayText: createOptionFromNullable(string, 'displayText'),
	dateCreated: createOptionFromNullable(DateFromISOString, 'dateCreated'),
	loanDocTaskId: createOptionFromNullable(number, 'loanDocTaskId'),
	messageId: createOptionFromNullable(number, 'messageId'),
	leadEventId: createOptionFromNullable(number, 'leadEventId'),
	fileId: createOptionFromNullable(string, 'fileId'),
	trackingId: createOptionFromNullable(number, 'trackingId'),
});
