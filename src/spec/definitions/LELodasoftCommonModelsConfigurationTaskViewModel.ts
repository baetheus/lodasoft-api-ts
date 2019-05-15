import { createEnumType } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';
import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';

export enum BorrowerTriggerEnum {
	'Loan',
	'PrimaryBorrower',
	'AllBorrowers',
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

export type LELodasoftCommonModelsConfigurationTaskViewModel = {
	taskId: Option<number>;
	taskName: Option<string>;
	triggerAssociations: Option<string>;
	borrowerTrigger: Option<BorrowerTriggerEnum>;
	isLeadTask: Option<boolean>;
	roleId: Option<number>;
	documentTypeId: Option<number>;
	reviewRequiredRoleId: Option<number>;
	notifyPartyRoleId: Option<number>;
	taskType: Option<TaskTypeEnum>;
	defaultTaskPriority: Option<DefaultTaskPriorityEnum>;
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
export const LELodasoftCommonModelsConfigurationTaskViewModelIO = type({
	taskId: createOptionFromOptional(number, 'taskId'),
	taskName: createOptionFromOptional(string, 'taskName'),
	triggerAssociations: createOptionFromOptional(string, 'triggerAssociations'),
	borrowerTrigger: createOptionFromOptional(
		createEnumType<BorrowerTriggerEnum>(BorrowerTriggerEnum, 'BorrowerTriggerEnum'),
		'borrowerTrigger',
	),
	isLeadTask: createOptionFromOptional(boolean, 'isLeadTask'),
	roleId: createOptionFromOptional(number, 'roleId'),
	documentTypeId: createOptionFromOptional(number, 'documentTypeId'),
	reviewRequiredRoleId: createOptionFromOptional(number, 'reviewRequiredRoleId'),
	notifyPartyRoleId: createOptionFromOptional(number, 'notifyPartyRoleId'),
	taskType: createOptionFromOptional(createEnumType<TaskTypeEnum>(TaskTypeEnum, 'TaskTypeEnum'), 'taskType'),
	defaultTaskPriority: createOptionFromOptional(
		createEnumType<DefaultTaskPriorityEnum>(DefaultTaskPriorityEnum, 'DefaultTaskPriorityEnum'),
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
