import {
	LELodasoftCommonModelsAdminTrackingUserViewModel,
	LELodasoftCommonModelsAdminTrackingUserViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminTrackingUserViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, union, literal, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsAdminTrackingViewModel = {
	trackingId: Option<number>;
	by: Option<string>;
	applicationId: Option<number>;
	taskId: Option<number>;
	fileId: Option<string>;
	actionType: Option<
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
	trackingId: createOptionFromNullable(number),
	by: createOptionFromNullable(string),
	applicationId: createOptionFromNullable(number),
	taskId: createOptionFromNullable(number),
	fileId: createOptionFromNullable(string),
	actionType: createOptionFromNullable(
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
	actionValue: createOptionFromNullable(string),
	dateCreated: createOptionFromNullable(DateFromISOString),
	userProfile: createOptionFromNullable(LELodasoftCommonModelsAdminTrackingUserViewModelIO),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
