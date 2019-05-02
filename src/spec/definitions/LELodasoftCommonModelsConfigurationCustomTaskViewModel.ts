import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import { createEnumType } from '../utils/utils';

export enum OptionEnum {
	'Immediately',
	'OnLoanStatus',
}

export enum ApplyToEnum {
	'Loan',
	'PrimaryBorrower',
	'SelectBorrowers',
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

export enum DefaultTaskPriority {
	'Low',
	'Normal',
	'High',
	'Immediate',
}

export type LELodasoftCommonModelsConfigurationCustomTaskViewModel = {
	customTaskId: Option<number>;
	taskCategoryId: Option<number>;
	loanStatusId: Option<number>;
	taskDescription: Option<string>;
	option: Option<OptionEnum>;
	applyTo: Option<ApplyToEnum>;
	roleId: Option<number>;
	documentTypeId: Option<number>;
	reviewRequiredRoleId: Option<number>;
	notifyPartyRoleId: Option<number>;
	taskType: Option<TaskTypeEnum>;
	defaultTaskPriority: Option<DefaultTaskPriority>;
	dueDays: Option<number>;
	permittedAgentTypes: Option<string>;
	tasksOnCompletion: Option<string>;
	documentDataHeader: Option<string>;
	documentData: Option<string>;
	docDataString: Option<string>;
	requestBorrower: Option<boolean>;
	alwaysShowPending: Option<boolean>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsConfigurationCustomTaskViewModelIO = type({
	customTaskId: createOptionFromNullable(number, 'customTaskId'),
	taskCategoryId: createOptionFromNullable(number, 'taskCategoryId'),
	loanStatusId: createOptionFromNullable(number, 'loanStatusId'),
	taskDescription: createOptionFromNullable(string, 'taskDescription'),
	option: createOptionFromNullable(createEnumType<OptionEnum>(OptionEnum, 'OptionEnum'), 'option'),
	applyTo: createOptionFromNullable(createEnumType<ApplyToEnum>(ApplyToEnum, 'ApplyToEnum'), 'applyTo'),
	roleId: createOptionFromNullable(number, 'roleId'),
	documentTypeId: createOptionFromNullable(number, 'documentTypeId'),
	reviewRequiredRoleId: createOptionFromNullable(number, 'reviewRequiredRoleId'),
	notifyPartyRoleId: createOptionFromNullable(number, 'notifyPartyRoleId'),
	taskType: createOptionFromNullable(createEnumType<TaskTypeEnum>(TaskTypeEnum, 'TaskTypeEnum'), 'taskType'),
	defaultTaskPriority: createOptionFromNullable(
		createEnumType<DefaultTaskPriority>(DefaultTaskPriority, 'DefaultTaskPriority'),
		'defaultTaskPriority',
	),
	dueDays: createOptionFromNullable(number, 'dueDays'),
	permittedAgentTypes: createOptionFromNullable(string, 'permittedAgentTypes'),
	tasksOnCompletion: createOptionFromNullable(string, 'tasksOnCompletion'),
	documentDataHeader: createOptionFromNullable(string, 'documentDataHeader'),
	documentData: createOptionFromNullable(string, 'documentData'),
	docDataString: createOptionFromNullable(string, 'docDataString'),
	requestBorrower: createOptionFromNullable(boolean, 'requestBorrower'),
	alwaysShowPending: createOptionFromNullable(boolean, 'alwaysShowPending'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
