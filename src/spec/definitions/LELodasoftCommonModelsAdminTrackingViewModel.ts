import {
	LELodasoftCommonModelsAdminTrackingUserViewModel,
	LELodasoftCommonModelsAdminTrackingUserViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminTrackingUserViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, keyof, type } from 'io-ts';
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
		| 'FailedEmailAlert'
		| 'FailedSmsAlert'
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
	trackingId: createOptionFromNullable(number, 'trackingId'),
	by: createOptionFromNullable(string, 'by'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	taskId: createOptionFromNullable(number, 'taskId'),
	fileId: createOptionFromNullable(string, 'fileId'),
	actionType: createOptionFromNullable(
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
