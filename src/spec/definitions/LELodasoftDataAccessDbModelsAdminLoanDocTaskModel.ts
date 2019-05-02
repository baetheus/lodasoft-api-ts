import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

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

export type LELodasoftDataAccessDbModelsAdminLoanDocTaskModel = {
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
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftDataAccessDbModelsAdminLoanDocTaskModelIO = type({
	loanDocTaskId: createOptionFromNullable(number, 'loanDocTaskId'),
	leadId: createOptionFromNullable(number, 'leadId'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	taskId: createOptionFromNullable(number, 'taskId'),
	customTaskId: createOptionFromNullable(number, 'customTaskId'),
	loanDocId: createOptionFromNullable(number, 'loanDocId'),
	documentTypeId: createOptionFromNullable(number, 'documentTypeId'),
	userId: createOptionFromNullable(string, 'userId'),
	roleId: createOptionFromNullable(number, 'roleId'),
	notifyPartyId: createOptionFromNullable(string, 'notifyPartyId'),
	reviewPartyId: createOptionFromNullable(string, 'reviewPartyId'),
	taskType: createOptionFromNullable(createEnumType<TaskTypeEnum>(TaskTypeEnum, 'TaskTypeEnum'), 'taskType'),
	taskPriority: createOptionFromNullable(
		createEnumType<TaskPriorityEnum>(TaskPriorityEnum, 'TaskPriorityEnum'),
		'taskPriority',
	),
	description: createOptionFromNullable(string, 'description'),
	note: createOptionFromNullable(string, 'note'),
	borrowerFacingNote: createOptionFromNullable(string, 'borrowerFacingNote'),
	requestedBy: createOptionFromNullable(string, 'requestedBy'),
	dueDays: createOptionFromNullable(number, 'dueDays'),
	taskStatus: createOptionFromNullable(
		createEnumType<TaskStatusEnum>(TaskStatusEnum, 'TaskStatusEnum'),
		'taskStatus',
	),
	conditionStatus: createOptionFromNullable(
		createEnumType<ConditionStatusEnum>(ConditionStatusEnum, 'ConditionStatusEnum'),
		'conditionStatus',
	),
	conditionType: createOptionFromNullable(
		createEnumType<ConditionTypeEnum>(ConditionTypeEnum, 'ConditionTypeEnum'),
		'conditionType',
	),
	requestBorrower: createOptionFromNullable(boolean, 'requestBorrower'),
	condition: createOptionFromNullable(boolean, 'condition'),
	requiresReview: createOptionFromNullable(boolean, 'requiresReview'),
	requestDate: createOptionFromNullable(DateFromISOString, 'requestDate'),
	dueDate: createOptionFromNullable(DateFromISOString, 'dueDate'),
	submittedDate: createOptionFromNullable(DateFromISOString, 'submittedDate'),
	acknowledgementDate: createOptionFromNullable(DateFromISOString, 'acknowledgementDate'),
	completeDate: createOptionFromNullable(DateFromISOString, 'completeDate'),
	followUpDate: createOptionFromNullable(DateFromISOString, 'followUpDate'),
	active: createOptionFromNullable(boolean, 'active'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
