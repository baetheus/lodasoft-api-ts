import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

import { createEnumType } from '@nll/utils-ts/lib/io';

export enum CategoryEnum {
	'LoanChangeStatus',
	'BorrowerMessage',
	'InternalMessage',
	'Lead',
	'DocumentFile',
}

export enum ActivityTypeEnum {
	'LoanChangeStatus',
	'BorrowerMessage',
	'InternalMessage',
	'LeadNote',
	'LeadEmail',
	'LeadSms',
	'LeadPhoneAttempt',
	'LeadPhoneSuccess',
	'ChangeStatus',
	'Uploadfile',
	'DeleteFile',
	'DownloadFile',
	'ExportFile',
	'FileNoteUpdated',
	'BorrowerNoteUpdated',
	'DeleteTask',
	'RemoveFileFromTrash',
	'ConditionStatusChange',
	'CreateTask',
	'RestoreTask',
	'MergeFile',
	'PostponeTask',
	'ChangeFollowUpDate',
	'ChangeDueDate',
	'ViewFile',
	'FileNameChanged',
	'ChangeConditionFlag',
	'ChangeDescription',
	'ChangeNotifyParty',
	'ChangePriority',
	'ChangeResponsibleParty',
	'ChangeReviewRequired',
	'Unknown',
}

export type LELodasoftCommonModelsAdminActivityLogViewModel = {
	userId: Option<string>;
	category: Option<CategoryEnum>;
	activityType: Option<ActivityTypeEnum>;
	displayText: Option<string>;
	dateCreated: Option<Date>;
	loanDocTaskId: Option<number>;
	messageId: Option<number>;
	leadEventId: Option<number>;
	fileId: Option<string>;
	trackingId: Option<number>;
};
export const LELodasoftCommonModelsAdminActivityLogViewModelIO = type({
	userId: createOptionFromOptional(string, 'userId'),
	category: createOptionFromOptional(createEnumType<CategoryEnum>(CategoryEnum, 'CategoryEnum'), 'category'),
	activityType: createOptionFromOptional(
		createEnumType<ActivityTypeEnum>(ActivityTypeEnum, 'ActivityTypeEnum'),
		'activityType',
	),
	displayText: createOptionFromOptional(string, 'displayText'),
	dateCreated: createOptionFromOptional(DateFromISOString, 'dateCreated'),
	loanDocTaskId: createOptionFromOptional(number, 'loanDocTaskId'),
	messageId: createOptionFromOptional(number, 'messageId'),
	leadEventId: createOptionFromOptional(number, 'leadEventId'),
	fileId: createOptionFromOptional(string, 'fileId'),
	trackingId: createOptionFromOptional(number, 'trackingId'),
});
