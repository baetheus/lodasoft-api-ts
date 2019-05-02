import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import {
	LELodasoftDataAccessDbModelsConfigurationCharacteristicModel,
	LELodasoftDataAccessDbModelsConfigurationCharacteristicModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationCharacteristicModel';
import {
	LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel,
	LELodasoftDataAccessDbModelsConfigurationDocumentTypeModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel';
import {
	LELodasoftDataAccessDbModelsConfigurationLoanStatusModel,
	LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationLoanStatusModel';
import {
	LELodasoftDataAccessDbModelsConfigurationRoleModel,
	LELodasoftDataAccessDbModelsConfigurationRoleModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationRoleModel';
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

export enum DefaultTaskPriorityEnum {
	'Low',
	'Normal',
	'High',
	'Immediate',
}

export type LELodasoftDataAccessDbModelsConfigurationCustomTaskModel = {
	customTaskId: Option<number>;
	taskCategoryId: Option<number>;
	taskCategoryModel: Option<LELodasoftDataAccessDbModelsConfigurationCharacteristicModel>;
	loanStatusId: Option<number>;
	loanStatusModel: Option<LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>;
	taskDescription: Option<string>;
	option: Option<OptionEnum>;
	applyTo: Option<ApplyToEnum>;
	roleId: Option<number>;
	roleModel: Option<LELodasoftDataAccessDbModelsConfigurationRoleModel>;
	documentTypeId: Option<number>;
	documentType: Option<LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel>;
	reviewRequiredRoleId: Option<number>;
	reviewRequiredRoleModel: Option<LELodasoftDataAccessDbModelsConfigurationRoleModel>;
	notifyPartyRoleId: Option<number>;
	notifyPartyRoleModel: Option<LELodasoftDataAccessDbModelsConfigurationRoleModel>;
	taskType: Option<TaskTypeEnum>;
	dueDays: Option<number>;
	permittedAgentTypes: Option<string>;
	tasksOnCompletion: Option<string>;
	documentDataHeader: Option<string>;
	defaultTaskPriority: Option<DefaultTaskPriorityEnum>;
	docDataString: Option<string>;
	requestBorrower: Option<boolean>;
	alwaysShowPending: Option<boolean>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftDataAccessDbModelsConfigurationCustomTaskModelIO = type({
	customTaskId: createOptionFromNullable(number, 'customTaskId'),
	taskCategoryId: createOptionFromNullable(number, 'taskCategoryId'),
	taskCategoryModel: createOptionFromNullable(
		LELodasoftDataAccessDbModelsConfigurationCharacteristicModelIO,
		'taskCategoryModel',
	),
	loanStatusId: createOptionFromNullable(number, 'loanStatusId'),
	loanStatusModel: createOptionFromNullable(
		LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO,
		'loanStatusModel',
	),
	taskDescription: createOptionFromNullable(string, 'taskDescription'),
	option: createOptionFromNullable(createEnumType<OptionEnum>(OptionEnum, 'OptionEnum'), 'option'),
	applyTo: createOptionFromNullable(createEnumType<ApplyToEnum>(ApplyToEnum, 'ApplyToEnum'), 'applyTo'),
	roleId: createOptionFromNullable(number, 'roleId'),
	roleModel: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationRoleModelIO, 'roleModel'),
	documentTypeId: createOptionFromNullable(number, 'documentTypeId'),
	documentType: createOptionFromNullable(
		LELodasoftDataAccessDbModelsConfigurationDocumentTypeModelIO,
		'documentType',
	),
	reviewRequiredRoleId: createOptionFromNullable(number, 'reviewRequiredRoleId'),
	reviewRequiredRoleModel: createOptionFromNullable(
		LELodasoftDataAccessDbModelsConfigurationRoleModelIO,
		'reviewRequiredRoleModel',
	),
	notifyPartyRoleId: createOptionFromNullable(number, 'notifyPartyRoleId'),
	notifyPartyRoleModel: createOptionFromNullable(
		LELodasoftDataAccessDbModelsConfigurationRoleModelIO,
		'notifyPartyRoleModel',
	),
	taskType: createOptionFromNullable(createEnumType<TaskTypeEnum>(TaskTypeEnum, 'TaskTypeEnum'), 'taskType'),
	dueDays: createOptionFromNullable(number, 'dueDays'),
	permittedAgentTypes: createOptionFromNullable(string, 'permittedAgentTypes'),
	tasksOnCompletion: createOptionFromNullable(string, 'tasksOnCompletion'),
	documentDataHeader: createOptionFromNullable(string, 'documentDataHeader'),
	defaultTaskPriority: createOptionFromNullable(
		createEnumType<DefaultTaskPriorityEnum>(DefaultTaskPriorityEnum, 'DefaultTaskPriorityEnum'),
		'defaultTaskPriority',
	),
	docDataString: createOptionFromNullable(string, 'docDataString'),
	requestBorrower: createOptionFromNullable(boolean, 'requestBorrower'),
	alwaysShowPending: createOptionFromNullable(boolean, 'alwaysShowPending'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
