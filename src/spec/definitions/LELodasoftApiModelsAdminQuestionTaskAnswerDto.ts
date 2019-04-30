import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, keyof, array, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsAdminQuestionTaskAnswerDto = {
	questionAnswerId: Option<number>;
	questionId: Option<number>;
	companyId: Option<number>;
	answerText: Option<string>;
	sortValue: Option<number>;
	require: Option<boolean>;
	tableName: Option<string>;
	columnName: Option<string>;
	dataType: Option<
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
	comparisonType: Option<
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
	compareValue: Option<string>;
	documentTypeId: Option<number>;
	exist: Option<boolean>;
	qaTaskId: Option<Array<number>>;
};
export const LELodasoftApiModelsAdminQuestionTaskAnswerDtoIO = type({
	questionAnswerId: createOptionFromNullable(number, 'questionAnswerId'),
	questionId: createOptionFromNullable(number, 'questionId'),
	companyId: createOptionFromNullable(number, 'companyId'),
	answerText: createOptionFromNullable(string, 'answerText'),
	sortValue: createOptionFromNullable(number, 'sortValue'),
	require: createOptionFromNullable(boolean, 'require'),
	tableName: createOptionFromNullable(string, 'tableName'),
	columnName: createOptionFromNullable(string, 'columnName'),
	dataType: createOptionFromNullable(
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
		'dataType',
	),
	comparisonType: createOptionFromNullable(
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
		'comparisonType',
	),
	compareValue: createOptionFromNullable(string, 'compareValue'),
	documentTypeId: createOptionFromNullable(number, 'documentTypeId'),
	exist: createOptionFromNullable(boolean, 'exist'),
	qaTaskId: createOptionFromNullable(array(number), 'qaTaskId'),
});
