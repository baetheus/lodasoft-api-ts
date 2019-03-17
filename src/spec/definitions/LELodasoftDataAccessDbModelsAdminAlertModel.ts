import { Option } from 'fp-ts/lib/Option';
import { number, string, union, literal, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsAdminAlertModel = {
	alertId: Option<number>;
	applicationId: Option<number>;
	taskId: Option<number>;
	loanDocId: Option<number>;
	userId: Option<string>;
	notifyPartyId: Option<string>;
	alertType: Option<
		| 'Immediately'
		| 'OnLoanStatus'
		| 'Private'
		| 'Group'
		| 'Public'
		| 'Al'
		| 'Event'
		| 'ToDo'
		| 'Appointment'
		| 'AutoApply'
		| 'Confirm'
		| 'RequestQuantity'
		| 'LoanCharacteristic'
		| 'BorrowerCharacteristic'
		| 'LessThan'
		| 'LessThanOrEqualTo'
		| 'EqualTo'
		| 'GreatherThan'
		| 'GreaterThanOrEqualTo'
		| 'NullOrEmpty'
		| 'NotNullOrEmpty'
		| 'StartsWith'
		| 'Contains'
		| 'DoesNotContain'
		| 'In'
		| 'NotIn'
		| 'YesNo'
		| 'TrueFalse'
		| 'OnOff'
		| 'Text'
		| 'Integer'
		| 'Decimal'
		| 'MultiSelect'
		| 'SelectList'
		| 'Value'
		| 'Docvalue'
		| 'DataValidation'
		| 'DocumentValidation'
		| 'ManualValidation'
		| 'Pdf'
		| 'Doc'
		| 'Txt'
		| 'Excel'
		| 'Csv'
		| 'Img'
		| 'ApplyToLoan'
		| 'ApplyToPrimaryBorrower'
		| 'ApplyToSelectBorrowers'
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
		| 'InternalMessageAlert'
		| 'BorrowerMessageAlert'
		| 'TaskStatusAlert'
		| 'GeneralAlert'
		| 'LoanStatusAlert'
	>;
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
	alertId: createOptionFromNullable(number),
	applicationId: createOptionFromNullable(number),
	taskId: createOptionFromNullable(number),
	loanDocId: createOptionFromNullable(number),
	userId: createOptionFromNullable(string),
	notifyPartyId: createOptionFromNullable(string),
	alertType: createOptionFromNullable(
		union([
			literal('Immediately'),
			literal('OnLoanStatus'),
			literal('Private'),
			literal('Group'),
			literal('Public'),
			literal('Al'),
			literal('Event'),
			literal('ToDo'),
			literal('Appointment'),
			literal('AutoApply'),
			literal('Confirm'),
			literal('RequestQuantity'),
			literal('LoanCharacteristic'),
			literal('BorrowerCharacteristic'),
			literal('LessThan'),
			literal('LessThanOrEqualTo'),
			literal('EqualTo'),
			literal('GreatherThan'),
			literal('GreaterThanOrEqualTo'),
			literal('NullOrEmpty'),
			literal('NotNullOrEmpty'),
			literal('StartsWith'),
			literal('Contains'),
			literal('DoesNotContain'),
			literal('In'),
			literal('NotIn'),
			literal('YesNo'),
			literal('TrueFalse'),
			literal('OnOff'),
			literal('Text'),
			literal('Integer'),
			literal('Decimal'),
			literal('MultiSelect'),
			literal('SelectList'),
			literal('Value'),
			literal('Docvalue'),
			literal('DataValidation'),
			literal('DocumentValidation'),
			literal('ManualValidation'),
			literal('Pdf'),
			literal('Doc'),
			literal('Txt'),
			literal('Excel'),
			literal('Csv'),
			literal('Img'),
			literal('ApplyToLoan'),
			literal('ApplyToPrimaryBorrower'),
			literal('ApplyToSelectBorrowers'),
			literal('ChangeStatus'),
			literal('Uploadfile'),
			literal('DeleteFile'),
			literal('DownloadFile'),
			literal('ExportFile'),
			literal('FileNoteUpdated'),
			literal('BorrowerNoteUpdated'),
			literal('DeleteTask'),
			literal('RemoveFileFromTrash'),
			literal('ConditionStatusChange'),
			literal('CreateTask'),
			literal('RestoreTask'),
			literal('MergeFile'),
			literal('PostponeTask'),
			literal('ChangeFollowUpDate'),
			literal('ChangeDueDate'),
			literal('ViewFile'),
			literal('FileNameChanged'),
			literal('ChangeConditionFlag'),
			literal('ChangeDescription'),
			literal('ChangeNotifyParty'),
			literal('ChangePriority'),
			literal('ChangeResponsibleParty'),
			literal('ChangeReviewRequired'),
			literal('InternalMessageAlert'),
			literal('BorrowerMessageAlert'),
			literal('TaskStatusAlert'),
			literal('GeneralAlert'),
			literal('LoanStatusAlert'),
		]),
	),
	alertText: createOptionFromNullable(string),
	createDate: createOptionFromNullable(DateFromISOString),
	applicationStatus: createOptionFromNullable(string),
	propertyAddress: createOptionFromNullable(string),
	userName: createOptionFromNullable(string),
	taskText: createOptionFromNullable(string),
	taskNote: createOptionFromNullable(string),
	notifyPartyName: createOptionFromNullable(string),
	borrowerId: createOptionFromNullable(number),
	borrowerName: createOptionFromNullable(string),
});
