import { createEnumType } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';
import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';

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
	customTaskId: createOptionFromOptional(number, 'customTaskId'),
	taskCategoryId: createOptionFromOptional(number, 'taskCategoryId'),
	taskCategoryModel: createOptionFromOptional(
		LELodasoftDataAccessDbModelsConfigurationCharacteristicModelIO,
		'taskCategoryModel',
	),
	loanStatusId: createOptionFromOptional(number, 'loanStatusId'),
	loanStatusModel: createOptionFromOptional(
		LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO,
		'loanStatusModel',
	),
	taskDescription: createOptionFromOptional(string, 'taskDescription'),
	option: createOptionFromOptional(createEnumType<OptionEnum>(OptionEnum, 'OptionEnum'), 'option'),
	applyTo: createOptionFromOptional(createEnumType<ApplyToEnum>(ApplyToEnum, 'ApplyToEnum'), 'applyTo'),
	roleId: createOptionFromOptional(number, 'roleId'),
	roleModel: createOptionFromOptional(LELodasoftDataAccessDbModelsConfigurationRoleModelIO, 'roleModel'),
	documentTypeId: createOptionFromOptional(number, 'documentTypeId'),
	documentType: createOptionFromOptional(
		LELodasoftDataAccessDbModelsConfigurationDocumentTypeModelIO,
		'documentType',
	),
	reviewRequiredRoleId: createOptionFromOptional(number, 'reviewRequiredRoleId'),
	reviewRequiredRoleModel: createOptionFromOptional(
		LELodasoftDataAccessDbModelsConfigurationRoleModelIO,
		'reviewRequiredRoleModel',
	),
	notifyPartyRoleId: createOptionFromOptional(number, 'notifyPartyRoleId'),
	notifyPartyRoleModel: createOptionFromOptional(
		LELodasoftDataAccessDbModelsConfigurationRoleModelIO,
		'notifyPartyRoleModel',
	),
	taskType: createOptionFromOptional(createEnumType<TaskTypeEnum>(TaskTypeEnum, 'TaskTypeEnum'), 'taskType'),
	dueDays: createOptionFromOptional(number, 'dueDays'),
	permittedAgentTypes: createOptionFromOptional(string, 'permittedAgentTypes'),
	tasksOnCompletion: createOptionFromOptional(string, 'tasksOnCompletion'),
	documentDataHeader: createOptionFromOptional(string, 'documentDataHeader'),
	defaultTaskPriority: createOptionFromOptional(
		createEnumType<DefaultTaskPriorityEnum>(DefaultTaskPriorityEnum, 'DefaultTaskPriorityEnum'),
		'defaultTaskPriority',
	),
	docDataString: createOptionFromOptional(string, 'docDataString'),
	requestBorrower: createOptionFromOptional(boolean, 'requestBorrower'),
	alwaysShowPending: createOptionFromOptional(boolean, 'alwaysShowPending'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromDatelike, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromDatelike, 'dateUpdated'),
});
