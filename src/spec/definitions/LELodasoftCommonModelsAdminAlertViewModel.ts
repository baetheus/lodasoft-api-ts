import { Option } from 'fp-ts/lib/Option';
import { number, keyof, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsAdminAlertViewModel = {
	alertId: Option<number>;
	applicationId: Option<number>;
	taskId: Option<number>;
	loanDocId: Option<number>;
	messageModelId: Option<number>;
	messageDelivery: Option<'Unspecified' | 'Email' | 'SMS' | 'Toaster'>;
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
		| 'FailedEmailAlert'
		| 'FailedSmsAlert'
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
export const LELodasoftCommonModelsAdminAlertViewModelIO = type({
	alertId: createOptionFromNullable(number, 'alertId'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	taskId: createOptionFromNullable(number, 'taskId'),
	loanDocId: createOptionFromNullable(number, 'loanDocId'),
	messageModelId: createOptionFromNullable(number, 'messageModelId'),
	messageDelivery: createOptionFromNullable(
		keyof({ Unspecified: null, Email: null, SMS: null, Toaster: null }),
		'messageDelivery',
	),
	userId: createOptionFromNullable(string, 'userId'),
	notifyPartyId: createOptionFromNullable(string, 'notifyPartyId'),
	alertType: createOptionFromNullable(
		keyof({
			Immediately: null,
			OnLoanStatus: null,
			Private: null,
			Group: null,
			Public: null,
			Al: null,
			Event: null,
			ToDo: null,
			Appointment: null,
			AutoApply: null,
			Confirm: null,
			RequestQuantity: null,
			LoanCharacteristic: null,
			BorrowerCharacteristic: null,
			LessThan: null,
			LessThanOrEqualTo: null,
			EqualTo: null,
			GreatherThan: null,
			GreaterThanOrEqualTo: null,
			NullOrEmpty: null,
			NotNullOrEmpty: null,
			StartsWith: null,
			Contains: null,
			DoesNotContain: null,
			In: null,
			NotIn: null,
			YesNo: null,
			TrueFalse: null,
			OnOff: null,
			Text: null,
			Integer: null,
			Decimal: null,
			MultiSelect: null,
			SelectList: null,
			Value: null,
			Docvalue: null,
			DataValidation: null,
			DocumentValidation: null,
			ManualValidation: null,
			Pdf: null,
			Doc: null,
			Txt: null,
			Excel: null,
			Csv: null,
			Img: null,
			ApplyToLoan: null,
			ApplyToPrimaryBorrower: null,
			ApplyToSelectBorrowers: null,
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
			InternalMessageAlert: null,
			BorrowerMessageAlert: null,
			TaskStatusAlert: null,
			GeneralAlert: null,
			LoanStatusAlert: null,
			FailedEmailAlert: null,
			FailedSmsAlert: null,
		}),
		'alertType',
	),
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
