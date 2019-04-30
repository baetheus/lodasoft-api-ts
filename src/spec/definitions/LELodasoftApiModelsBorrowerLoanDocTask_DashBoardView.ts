import {
	LELodasoftDataAccessModelsAdminBorrowerFileDto,
	LELodasoftDataAccessModelsAdminBorrowerFileDtoIO,
} from '../definitions/LELodasoftDataAccessModelsAdminBorrowerFileDto';
import { Option } from 'fp-ts/lib/Option';
import { number, string, keyof, boolean, array, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView = {
	loanDocTaskId: Option<number>;
	applicationId: Option<number>;
	leadId: Option<number>;
	loanDocId: Option<number>;
	primaryBorrowerId: Option<number>;
	borrowerId: Option<number>;
	fullName: Option<string>;
	applicationName: Option<string>;
	taskId: Option<number>;
	customTaskId: Option<number>;
	responsibleParty: Option<string>;
	requestedBy: Option<string>;
	note: Option<string>;
	status: Option<
		'Pending' | 'Submitted' | 'Rejected' | 'Approved' | 'NotApplicable' | 'Requested' | 'Completed' | 'ReviewReady'
	>;
	taskStatus: Option<string>;
	taskPriority: Option<'Low' | 'Normal' | 'High' | 'Immediate'>;
	taskType: Option<
		| 'RequestDocument'
		| 'ViewDocument'
		| 'AcknowledgeReceipt'
		| 'EsignDocument'
		| 'RequestInformation'
		| 'PerformAction'
		| 'OnlineApplication'
		| 'DigitalAssetVerification'
	>;
	documentTypeId: Option<number>;
	docTypeText: Option<string>;
	description: Option<string>;
	dueDays: Option<number>;
	requestDate: Option<Date>;
	dueDate: Option<Date>;
	followUp: Option<Date>;
	completeDate: Option<Date>;
	submittedDate: Option<Date>;
	expirationDate: Option<Date>;
	userId: Option<string>;
	roleId: Option<number>;
	requestBorrower: Option<boolean>;
	loading: Option<boolean>;
	borrowerNote: Option<string>;
	condition: Option<boolean>;
	conditionStatus: Option<'ConditionPending' | 'ConditionCleared' | 'ConditionReOpened'>;
	conditionType: Option<'PTS' | 'PTD' | 'PTF' | 'PTC'>;
	docFiles: Option<Array<LELodasoftDataAccessModelsAdminBorrowerFileDto>>;
	notifyPartyId: Option<string>;
	requiresReview: Option<boolean>;
	reviewPartyId: Option<string>;
	borrowerFacingNote: Option<string>;
	hasTemplateDocument: Option<boolean>;
	templateDocumentUrl: Option<string>;
};
export const LELodasoftApiModelsBorrowerLoanDocTask_DashBoardViewIO = type({
	loanDocTaskId: createOptionFromNullable(number, 'loanDocTaskId'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	leadId: createOptionFromNullable(number, 'leadId'),
	loanDocId: createOptionFromNullable(number, 'loanDocId'),
	primaryBorrowerId: createOptionFromNullable(number, 'primaryBorrowerId'),
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	fullName: createOptionFromNullable(string, 'fullName'),
	applicationName: createOptionFromNullable(string, 'applicationName'),
	taskId: createOptionFromNullable(number, 'taskId'),
	customTaskId: createOptionFromNullable(number, 'customTaskId'),
	responsibleParty: createOptionFromNullable(string, 'responsibleParty'),
	requestedBy: createOptionFromNullable(string, 'requestedBy'),
	note: createOptionFromNullable(string, 'note'),
	status: createOptionFromNullable(
		keyof({
			Pending: null,
			Submitted: null,
			Rejected: null,
			Approved: null,
			NotApplicable: null,
			Requested: null,
			Completed: null,
			ReviewReady: null,
		}),
		'status',
	),
	taskStatus: createOptionFromNullable(string, 'taskStatus'),
	taskPriority: createOptionFromNullable(
		keyof({ Low: null, Normal: null, High: null, Immediate: null }),
		'taskPriority',
	),
	taskType: createOptionFromNullable(
		keyof({
			RequestDocument: null,
			ViewDocument: null,
			AcknowledgeReceipt: null,
			EsignDocument: null,
			RequestInformation: null,
			PerformAction: null,
			OnlineApplication: null,
			DigitalAssetVerification: null,
		}),
		'taskType',
	),
	documentTypeId: createOptionFromNullable(number, 'documentTypeId'),
	docTypeText: createOptionFromNullable(string, 'docTypeText'),
	description: createOptionFromNullable(string, 'description'),
	dueDays: createOptionFromNullable(number, 'dueDays'),
	requestDate: createOptionFromNullable(DateFromISOString, 'requestDate'),
	dueDate: createOptionFromNullable(DateFromISOString, 'dueDate'),
	followUp: createOptionFromNullable(DateFromISOString, 'followUp'),
	completeDate: createOptionFromNullable(DateFromISOString, 'completeDate'),
	submittedDate: createOptionFromNullable(DateFromISOString, 'submittedDate'),
	expirationDate: createOptionFromNullable(DateFromISOString, 'expirationDate'),
	userId: createOptionFromNullable(string, 'userId'),
	roleId: createOptionFromNullable(number, 'roleId'),
	requestBorrower: createOptionFromNullable(boolean, 'requestBorrower'),
	loading: createOptionFromNullable(boolean, 'loading'),
	borrowerNote: createOptionFromNullable(string, 'borrowerNote'),
	condition: createOptionFromNullable(boolean, 'condition'),
	conditionStatus: createOptionFromNullable(
		keyof({ ConditionPending: null, ConditionCleared: null, ConditionReOpened: null }),
		'conditionStatus',
	),
	conditionType: createOptionFromNullable(keyof({ PTS: null, PTD: null, PTF: null, PTC: null }), 'conditionType'),
	docFiles: createOptionFromNullable(array(LELodasoftDataAccessModelsAdminBorrowerFileDtoIO), 'docFiles'),
	notifyPartyId: createOptionFromNullable(string, 'notifyPartyId'),
	requiresReview: createOptionFromNullable(boolean, 'requiresReview'),
	reviewPartyId: createOptionFromNullable(string, 'reviewPartyId'),
	borrowerFacingNote: createOptionFromNullable(string, 'borrowerFacingNote'),
	hasTemplateDocument: createOptionFromNullable(boolean, 'hasTemplateDocument'),
	templateDocumentUrl: createOptionFromNullable(string, 'templateDocumentUrl'),
});
