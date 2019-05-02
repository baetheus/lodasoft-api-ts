import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import { createEnumType } from '../utils/utils';

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
	userId: createOptionFromNullable(string, 'userId'),
	category: createOptionFromNullable(createEnumType<CategoryEnum>(CategoryEnum, 'CategoryEnum'), 'category'),
	activityType: createOptionFromNullable(
		createEnumType<ActivityTypeEnum>(ActivityTypeEnum, 'ActivityTypeEnum'),
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
