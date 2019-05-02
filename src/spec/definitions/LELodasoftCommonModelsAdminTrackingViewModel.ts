import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import {
	LELodasoftCommonModelsAdminTrackingUserViewModel,
	LELodasoftCommonModelsAdminTrackingUserViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminTrackingUserViewModel';
import { createEnumType } from '../utils/utils';

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
	trackingId: createOptionFromNullable(number, 'trackingId'),
	by: createOptionFromNullable(string, 'by'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	taskId: createOptionFromNullable(number, 'taskId'),
	fileId: createOptionFromNullable(string, 'fileId'),
	actionType: createOptionFromNullable(
		createEnumType<ActionTypeEnum>(ActionTypeEnum, 'ActionTypeEnum'),
		'actionType',
	),
	actionValue: createOptionFromNullable(string, 'actionValue'),
	dateCreated: createOptionFromNullable(DateFromISOString, 'dateCreated'),
	userProfile: createOptionFromNullable(LELodasoftCommonModelsAdminTrackingUserViewModelIO, 'userProfile'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
