import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import { createEnumType } from '../utils/utils';

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

export type LELodasoftDataAccessDbModelsAdminAlertModel = {
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
export const LELodasoftDataAccessDbModelsAdminAlertModelIO = type({
	alertId: createOptionFromNullable(number, 'alertId'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	taskId: createOptionFromNullable(number, 'taskId'),
	loanDocId: createOptionFromNullable(number, 'loanDocId'),
	messageModelId: createOptionFromNullable(number, 'messageModelId'),
	messageDelivery: createOptionFromNullable(
		createEnumType<MessageDeliveryEnum>(MessageDeliveryEnum, 'MessageDeliveryEnum'),
		'messageDelivery',
	),
	userId: createOptionFromNullable(string, 'userId'),
	notifyPartyId: createOptionFromNullable(string, 'notifyPartyId'),
	alertType: createOptionFromNullable(createEnumType<AlertTypeEnum>(AlertTypeEnum, 'AlertTypeEnum'), 'alertType'),
	alertText: createOptionFromNullable(string, 'alertText'),
	createDate: createOptionFromNullable(DateFromISOString, 'createDate'),
	applicationStatus: createOptionFromNullable(string, 'applicationStatus'),
	propertyAddress: createOptionFromNullable(string, 'propertyAddress'),
	userName: createOptionFromNullable(string, 'userName'),
	taskText: createOptionFromNullable(string, 'taskText'),
	taskNote: createOptionFromNullable(string, 'taskNote'),
	notifyPartyName: createOptionFromNullable(string, 'notifyPartyName'),
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	borrowerName: createOptionFromNullable(string, 'borrowerName'),
});
