import { createEnumType } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';
import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';

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
	customTaskId: createOptionFromOptional(number, 'customTaskId'),
	taskCategoryId: createOptionFromOptional(number, 'taskCategoryId'),
	loanStatusId: createOptionFromOptional(number, 'loanStatusId'),
	taskDescription: createOptionFromOptional(string, 'taskDescription'),
	option: createOptionFromOptional(createEnumType<OptionEnum>(OptionEnum, 'OptionEnum'), 'option'),
	applyTo: createOptionFromOptional(createEnumType<ApplyToEnum>(ApplyToEnum, 'ApplyToEnum'), 'applyTo'),
	roleId: createOptionFromOptional(number, 'roleId'),
	documentTypeId: createOptionFromOptional(number, 'documentTypeId'),
	reviewRequiredRoleId: createOptionFromOptional(number, 'reviewRequiredRoleId'),
	notifyPartyRoleId: createOptionFromOptional(number, 'notifyPartyRoleId'),
	taskType: createOptionFromOptional(createEnumType<TaskTypeEnum>(TaskTypeEnum, 'TaskTypeEnum'), 'taskType'),
	defaultTaskPriority: createOptionFromOptional(
		createEnumType<DefaultTaskPriority>(DefaultTaskPriority, 'DefaultTaskPriority'),
		'defaultTaskPriority',
	),
	dueDays: createOptionFromOptional(number, 'dueDays'),
	permittedAgentTypes: createOptionFromOptional(string, 'permittedAgentTypes'),
	tasksOnCompletion: createOptionFromOptional(string, 'tasksOnCompletion'),
	documentDataHeader: createOptionFromOptional(string, 'documentDataHeader'),
	documentData: createOptionFromOptional(string, 'documentData'),
	docDataString: createOptionFromOptional(string, 'docDataString'),
	requestBorrower: createOptionFromOptional(boolean, 'requestBorrower'),
	alwaysShowPending: createOptionFromOptional(boolean, 'alwaysShowPending'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
