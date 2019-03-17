import {
	LELodasoftDataAccessModelsAdminBorrowerFileDto,
	LELodasoftDataAccessModelsAdminBorrowerFileDtoIO,
} from '../definitions/LELodasoftDataAccessModelsAdminBorrowerFileDto';
import { Option } from 'fp-ts/lib/Option';
import { number, string, union, literal, boolean, array, type } from 'io-ts';
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
	loanDocTaskId: createOptionFromNullable(number),
	applicationId: createOptionFromNullable(number),
	leadId: createOptionFromNullable(number),
	loanDocId: createOptionFromNullable(number),
	primaryBorrowerId: createOptionFromNullable(number),
	borrowerId: createOptionFromNullable(number),
	fullName: createOptionFromNullable(string),
	applicationName: createOptionFromNullable(string),
	taskId: createOptionFromNullable(number),
	customTaskId: createOptionFromNullable(number),
	responsibleParty: createOptionFromNullable(string),
	requestedBy: createOptionFromNullable(string),
	note: createOptionFromNullable(string),
	status: createOptionFromNullable(
		union([
			literal('Pending'),
			literal('Submitted'),
			literal('Rejected'),
			literal('Approved'),
			literal('NotApplicable'),
			literal('Requested'),
			literal('Completed'),
			literal('ReviewReady'),
		]),
	),
	taskStatus: createOptionFromNullable(string),
	taskPriority: createOptionFromNullable(
		union([literal('Low'), literal('Normal'), literal('High'), literal('Immediate')]),
	),
	taskType: createOptionFromNullable(
		union([
			literal('RequestDocument'),
			literal('ViewDocument'),
			literal('AcknowledgeReceipt'),
			literal('EsignDocument'),
			literal('RequestInformation'),
			literal('PerformAction'),
			literal('OnlineApplication'),
			literal('DigitalAssetVerification'),
		]),
	),
	documentTypeId: createOptionFromNullable(number),
	docTypeText: createOptionFromNullable(string),
	description: createOptionFromNullable(string),
	dueDays: createOptionFromNullable(number),
	requestDate: createOptionFromNullable(DateFromISOString),
	dueDate: createOptionFromNullable(DateFromISOString),
	followUp: createOptionFromNullable(DateFromISOString),
	completeDate: createOptionFromNullable(DateFromISOString),
	submittedDate: createOptionFromNullable(DateFromISOString),
	expirationDate: createOptionFromNullable(DateFromISOString),
	userId: createOptionFromNullable(string),
	roleId: createOptionFromNullable(number),
	requestBorrower: createOptionFromNullable(boolean),
	loading: createOptionFromNullable(boolean),
	borrowerNote: createOptionFromNullable(string),
	condition: createOptionFromNullable(boolean),
	conditionStatus: createOptionFromNullable(
		union([literal('ConditionPending'), literal('ConditionCleared'), literal('ConditionReOpened')]),
	),
	conditionType: createOptionFromNullable(union([literal('PTS'), literal('PTD'), literal('PTF'), literal('PTC')])),
	docFiles: createOptionFromNullable(array(LELodasoftDataAccessModelsAdminBorrowerFileDtoIO)),
	notifyPartyId: createOptionFromNullable(string),
	requiresReview: createOptionFromNullable(boolean),
	reviewPartyId: createOptionFromNullable(string),
	borrowerFacingNote: createOptionFromNullable(string),
	hasTemplateDocument: createOptionFromNullable(boolean),
	templateDocumentUrl: createOptionFromNullable(string),
});
