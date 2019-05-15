import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

import {
	LELodasoftCommonModelsAdminTrackingUserViewModel,
	LELodasoftCommonModelsAdminTrackingUserViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminTrackingUserViewModel';
import { createEnumType } from '@nll/utils-ts/lib/io';

export enum ActionTypeEnum {
	'Immediately',
	'OnLoanStatus',
	'Private',
	'Group',
	'Public',
	'Al',
	'Event',
	'ToDo',
	'Appointment',
	'AutoApply',
	'Confirm',
	'RequestQuantity',
	'LoanCharacteristic',
	'BorrowerCharacteristic',
	'LessThan',
	'LessThanOrEqualTo',
	'EqualTo',
	'GreatherThan',
	'GreaterThanOrEqualTo',
	'NullOrEmpty',
	'NotNullOrEmpty',
	'StartsWith',
	'Contains',
	'DoesNotContain',
	'In',
	'NotIn',
	'YesNo',
	'TrueFalse',
	'OnOff',
	'Text',
	'Integer',
	'Decimal',
	'MultiSelect',
	'SelectList',
	'Value',
	'Docvalue',
	'DataValidation',
	'DocumentValidation',
	'ManualValidation',
	'Pdf',
	'Doc',
	'Txt',
	'Excel',
	'Csv',
	'Img',
	'ApplyToLoan',
	'ApplyToPrimaryBorrower',
	'ApplyToSelectBorrowers',
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
	'InternalMessageAlert',
	'BorrowerMessageAlert',
	'TaskStatusAlert',
	'GeneralAlert',
	'LoanStatusAlert',
	'FailedEmailAlert',
	'FailedSmsAlert',
}

export type LELodasoftCommonModelsAdminTrackingViewModel = {
	trackingId: Option<number>;
	by: Option<string>;
	applicationId: Option<number>;
	taskId: Option<number>;
	fileId: Option<string>;
	actionType: Option<ActionTypeEnum>;
	actionValue: Option<string>;
	dateCreated: Option<Date>;
	userProfile: Option<LELodasoftCommonModelsAdminTrackingUserViewModel>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsAdminTrackingViewModelIO = type({
	trackingId: createOptionFromOptional(number, 'trackingId'),
	by: createOptionFromOptional(string, 'by'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	taskId: createOptionFromOptional(number, 'taskId'),
	fileId: createOptionFromOptional(string, 'fileId'),
	actionType: createOptionFromOptional(
		createEnumType<ActionTypeEnum>(ActionTypeEnum, 'ActionTypeEnum'),
		'actionType',
	),
	actionValue: createOptionFromOptional(string, 'actionValue'),
	dateCreated: createOptionFromOptional(DateFromISOString, 'dateCreated'),
	userProfile: createOptionFromOptional(LELodasoftCommonModelsAdminTrackingUserViewModelIO, 'userProfile'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
