import { Option } from 'fp-ts/lib/Option';
import { array, boolean, number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

import {
	LELodasoftDataAccessModelsAdminBorrowerFileDto,
	LELodasoftDataAccessModelsAdminBorrowerFileDtoIO,
} from '../definitions/LELodasoftDataAccessModelsAdminBorrowerFileDto';
import { createEnumType } from '../utils/utils';

export enum StatusEnum {
	'Pending',
	'Submitted',
	'Rejected',
	'Approved',
	'NotApplicable',
	'Requested',
	'Completed',
	'ReviewReady',
}

export enum TaskPriorityEnum {
	'Low',
	'Normal',
	'High',
	'Immediate',
}

export enum TaskTypeEnum {
	'RequestDocument',
	'ViewDocument',
	'AcknowledgeReceipt',
	'EsignDocument',
	'RequestInformation',
	'PerformAction',
	'OnlineApplication',
	'DigitalAssetVerification',
}

export enum ConditionStatusEnum {
	'ConditionPending',
	'ConditionCleared',
	'ConditionReOpened',
}

export enum ConditionTypeEnum {
	'PTS',
	'PTD',
	'PTF',
	'PTC',
}

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
	status: Option<StatusEnum>;
	taskStatus: Option<string>;
	taskPriority: Option<TaskPriorityEnum>;
	taskType: Option<TaskTypeEnum>;
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
	conditionStatus: Option<ConditionStatusEnum>;
	conditionType: Option<ConditionTypeEnum>;
	docFiles: Option<Array<LELodasoftDataAccessModelsAdminBorrowerFileDto>>;
	notifyPartyId: Option<string>;
	requiresReview: Option<boolean>;
	reviewPartyId: Option<string>;
	borrowerFacingNote: Option<string>;
	hasTemplateDocument: Option<boolean>;
	templateDocumentUrl: Option<string>;
};
export const LELodasoftApiModelsBorrowerLoanDocTask_DashBoardViewIO = type({
	loanDocTaskId: createOptionFromOptional(number, 'loanDocTaskId'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	leadId: createOptionFromOptional(number, 'leadId'),
	loanDocId: createOptionFromOptional(number, 'loanDocId'),
	primaryBorrowerId: createOptionFromOptional(number, 'primaryBorrowerId'),
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	fullName: createOptionFromOptional(string, 'fullName'),
	applicationName: createOptionFromOptional(string, 'applicationName'),
	taskId: createOptionFromOptional(number, 'taskId'),
	customTaskId: createOptionFromOptional(number, 'customTaskId'),
	responsibleParty: createOptionFromOptional(string, 'responsibleParty'),
	requestedBy: createOptionFromOptional(string, 'requestedBy'),
	note: createOptionFromOptional(string, 'note'),
	status: createOptionFromOptional(createEnumType<StatusEnum>(StatusEnum, 'StatusEnum'), 'status'),
	taskStatus: createOptionFromOptional(string, 'taskStatus'),
	taskPriority: createOptionFromOptional(
		createEnumType<TaskPriorityEnum>(TaskPriorityEnum, 'TaskPriorityEnum'),
		'taskPriority',
	),
	taskType: createOptionFromOptional(createEnumType<TaskTypeEnum>(TaskTypeEnum, 'TaskTypeEnum'), 'taskType'),
	documentTypeId: createOptionFromOptional(number, 'documentTypeId'),
	docTypeText: createOptionFromOptional(string, 'docTypeText'),
	description: createOptionFromOptional(string, 'description'),
	dueDays: createOptionFromOptional(number, 'dueDays'),
	requestDate: createOptionFromOptional(DateFromISOString, 'requestDate'),
	dueDate: createOptionFromOptional(DateFromISOString, 'dueDate'),
	followUp: createOptionFromOptional(DateFromISOString, 'followUp'),
	completeDate: createOptionFromOptional(DateFromISOString, 'completeDate'),
	submittedDate: createOptionFromOptional(DateFromISOString, 'submittedDate'),
	expirationDate: createOptionFromOptional(DateFromISOString, 'expirationDate'),
	userId: createOptionFromOptional(string, 'userId'),
	roleId: createOptionFromOptional(number, 'roleId'),
	requestBorrower: createOptionFromOptional(boolean, 'requestBorrower'),
	loading: createOptionFromOptional(boolean, 'loading'),
	borrowerNote: createOptionFromOptional(string, 'borrowerNote'),
	condition: createOptionFromOptional(boolean, 'condition'),
	conditionStatus: createOptionFromOptional(
		createEnumType<ConditionStatusEnum>(ConditionStatusEnum, 'ConditionStatusEnum'),
		'conditionStatus',
	),
	conditionType: createOptionFromOptional(
		createEnumType<ConditionTypeEnum>(ConditionTypeEnum, 'ConditionTypeEnum'),
		'conditionType',
	),
	docFiles: createOptionFromOptional(array(LELodasoftDataAccessModelsAdminBorrowerFileDtoIO), 'docFiles'),
	notifyPartyId: createOptionFromOptional(string, 'notifyPartyId'),
	requiresReview: createOptionFromOptional(boolean, 'requiresReview'),
	reviewPartyId: createOptionFromOptional(string, 'reviewPartyId'),
	borrowerFacingNote: createOptionFromOptional(string, 'borrowerFacingNote'),
	hasTemplateDocument: createOptionFromOptional(boolean, 'hasTemplateDocument'),
	templateDocumentUrl: createOptionFromOptional(string, 'templateDocumentUrl'),
});
