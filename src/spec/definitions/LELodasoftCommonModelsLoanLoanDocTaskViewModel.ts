import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

import {
	LELodasoftCommonModelsConfigurationCustomTaskViewModel,
	LELodasoftCommonModelsConfigurationCustomTaskViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationCustomTaskViewModel';
import {
	LELodasoftCommonModelsConfigurationTaskViewModel,
	LELodasoftCommonModelsConfigurationTaskViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationTaskViewModel';
import {
	LELodasoftCommonModelsLoanLoanDocViewModel,
	LELodasoftCommonModelsLoanLoanDocViewModelIO,
} from '../definitions/LELodasoftCommonModelsLoanLoanDocViewModel';
import { createEnumType } from '../utils/utils';

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

export enum TaskPriorityEnum {
	'Low',
	'Normal',
	'High',
	'Immediate',
}

export enum TaskStatusEnum {
	'Pending',
	'Submitted',
	'Rejected',
	'Approved',
	'NotApplicable',
	'Requested',
	'Completed',
	'ReviewReady',
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

export type LELodasoftCommonModelsLoanLoanDocTaskViewModel = {
	loanDocTaskId: Option<number>;
	leadId: Option<number>;
	applicationId: Option<number>;
	borrowerId: Option<number>;
	taskId: Option<number>;
	customTaskId: Option<number>;
	loanDocId: Option<number>;
	documentTypeId: Option<number>;
	userId: Option<string>;
	roleId: Option<number>;
	notifyPartyId: Option<string>;
	reviewPartyId: Option<string>;
	templateDocumentUrl: Option<string>;
	taskType: Option<TaskTypeEnum>;
	taskPriority: Option<TaskPriorityEnum>;
	description: Option<string>;
	note: Option<string>;
	borrowerFacingNote: Option<string>;
	requestedBy: Option<string>;
	dueDays: Option<number>;
	taskStatus: Option<TaskStatusEnum>;
	conditionStatus: Option<ConditionStatusEnum>;
	conditionType: Option<ConditionTypeEnum>;
	requestBorrower: Option<boolean>;
	condition: Option<boolean>;
	requiresReview: Option<boolean>;
	requestDate: Option<Date>;
	dueDate: Option<Date>;
	submittedDate: Option<Date>;
	acknowledgementDate: Option<Date>;
	completeDate: Option<Date>;
	followUpDate: Option<Date>;
	active: Option<boolean>;
	taskModel: Option<LELodasoftCommonModelsConfigurationTaskViewModel>;
	customTaskModel: Option<LELodasoftCommonModelsConfigurationCustomTaskViewModel>;
	loanDocModel: Option<LELodasoftCommonModelsLoanLoanDocViewModel>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsLoanLoanDocTaskViewModelIO = type({
	loanDocTaskId: createOptionFromOptional(number, 'loanDocTaskId'),
	leadId: createOptionFromOptional(number, 'leadId'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	taskId: createOptionFromOptional(number, 'taskId'),
	customTaskId: createOptionFromOptional(number, 'customTaskId'),
	loanDocId: createOptionFromOptional(number, 'loanDocId'),
	documentTypeId: createOptionFromOptional(number, 'documentTypeId'),
	userId: createOptionFromOptional(string, 'userId'),
	roleId: createOptionFromOptional(number, 'roleId'),
	notifyPartyId: createOptionFromOptional(string, 'notifyPartyId'),
	reviewPartyId: createOptionFromOptional(string, 'reviewPartyId'),
	templateDocumentUrl: createOptionFromOptional(string, 'templateDocumentUrl'),
	taskType: createOptionFromOptional(createEnumType<TaskTypeEnum>(TaskTypeEnum, 'TaskTypeEnum'), 'taskType'),
	taskPriority: createOptionFromOptional(
		createEnumType<TaskPriorityEnum>(TaskPriorityEnum, 'TaskPriorityEnum'),
		'taskPriority',
	),
	description: createOptionFromOptional(string, 'description'),
	note: createOptionFromOptional(string, 'note'),
	borrowerFacingNote: createOptionFromOptional(string, 'borrowerFacingNote'),
	requestedBy: createOptionFromOptional(string, 'requestedBy'),
	dueDays: createOptionFromOptional(number, 'dueDays'),
	taskStatus: createOptionFromOptional(
		createEnumType<TaskStatusEnum>(TaskStatusEnum, 'TaskStatusEnum'),
		'taskStatus',
	),
	conditionStatus: createOptionFromOptional(
		createEnumType<ConditionStatusEnum>(ConditionStatusEnum, 'ConditionStatusEnum'),
		'conditionStatus',
	),
	conditionType: createOptionFromOptional(
		createEnumType<ConditionTypeEnum>(ConditionTypeEnum, 'ConditionTypeEnum'),
		'conditionType',
	),
	requestBorrower: createOptionFromOptional(boolean, 'requestBorrower'),
	condition: createOptionFromOptional(boolean, 'condition'),
	requiresReview: createOptionFromOptional(boolean, 'requiresReview'),
	requestDate: createOptionFromOptional(DateFromISOString, 'requestDate'),
	dueDate: createOptionFromOptional(DateFromISOString, 'dueDate'),
	submittedDate: createOptionFromOptional(DateFromISOString, 'submittedDate'),
	acknowledgementDate: createOptionFromOptional(DateFromISOString, 'acknowledgementDate'),
	completeDate: createOptionFromOptional(DateFromISOString, 'completeDate'),
	followUpDate: createOptionFromOptional(DateFromISOString, 'followUpDate'),
	active: createOptionFromOptional(boolean, 'active'),
	taskModel: createOptionFromOptional(LELodasoftCommonModelsConfigurationTaskViewModelIO, 'taskModel'),
	customTaskModel: createOptionFromOptional(
		LELodasoftCommonModelsConfigurationCustomTaskViewModelIO,
		'customTaskModel',
	),
	loanDocModel: createOptionFromOptional(LELodasoftCommonModelsLoanLoanDocViewModelIO, 'loanDocModel'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
