import { createEnumType } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';
import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';

export enum MessageDeliveryEnum {
	'Unspecified',
	'Email',
	'SMS',
	'Toaster',
}

export enum AlertTypeEnum {
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

export type LELodasoftCommonModelsAdminAlertViewModel = {
	alertId: Option<number>;
	applicationId: Option<number>;
	taskId: Option<number>;
	loanDocId: Option<number>;
	messageModelId: Option<number>;
	messageDelivery: Option<MessageDeliveryEnum>;
	userId: Option<string>;
	notifyPartyId: Option<string>;
	alertType: Option<AlertTypeEnum>;
	alertText: Option<string>;
	createDate: Option<Date>;
	applicationStatus: Option<string>;
	propertyAddress: Option<string>;
	userName: Option<string>;
	taskText: Option<string>;
	taskNote: Option<string>;
	notifyPartyName: Option<string>;
	borrowerId: Option<number>;
	borrowerName: Option<string>;
};
export const LELodasoftCommonModelsAdminAlertViewModelIO = type({
	alertId: createOptionFromOptional(number, 'alertId'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	taskId: createOptionFromOptional(number, 'taskId'),
	loanDocId: createOptionFromOptional(number, 'loanDocId'),
	messageModelId: createOptionFromOptional(number, 'messageModelId'),
	messageDelivery: createOptionFromOptional(
		createEnumType<MessageDeliveryEnum>(MessageDeliveryEnum, 'MessageDeliveryEnum'),
		'messageDelivery',
	),
	userId: createOptionFromOptional(string, 'userId'),
	notifyPartyId: createOptionFromOptional(string, 'notifyPartyId'),
	alertType: createOptionFromOptional(createEnumType<AlertTypeEnum>(AlertTypeEnum, 'AlertTypeEnum'), 'alertType'),
	alertText: createOptionFromOptional(string, 'alertText'),
	createDate: createOptionFromOptional(DateFromISOString, 'createDate'),
	applicationStatus: createOptionFromOptional(string, 'applicationStatus'),
	propertyAddress: createOptionFromOptional(string, 'propertyAddress'),
	userName: createOptionFromOptional(string, 'userName'),
	taskText: createOptionFromOptional(string, 'taskText'),
	taskNote: createOptionFromOptional(string, 'taskNote'),
	notifyPartyName: createOptionFromOptional(string, 'notifyPartyName'),
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	borrowerName: createOptionFromOptional(string, 'borrowerName'),
});
