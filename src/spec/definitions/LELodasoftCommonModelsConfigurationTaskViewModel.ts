import { Option } from 'fp-ts/lib/Option';
import { number, string, union, literal, boolean, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsConfigurationTaskViewModel = {
	taskId: Option<number>;
	taskName: Option<string>;
	triggerAssociations: Option<string>;
	borrowerTrigger: Option<'Loan' | 'PrimaryBorrower' | 'AllBorrowers' | 'SelectBorrowers'>;
	isLeadTask: Option<boolean>;
	roleId: Option<number>;
	documentTypeId: Option<number>;
	reviewRequiredRoleId: Option<number>;
	notifyPartyRoleId: Option<number>;
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
	defaultTaskPriority: Option<'Low' | 'Normal' | 'High' | 'Immediate'>;
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
	taskId: createOptionFromNullable(number),
	taskName: createOptionFromNullable(string),
	triggerAssociations: createOptionFromNullable(string),
	borrowerTrigger: createOptionFromNullable(
		union([literal('Loan'), literal('PrimaryBorrower'), literal('AllBorrowers'), literal('SelectBorrowers')]),
	),
	isLeadTask: createOptionFromNullable(boolean),
	roleId: createOptionFromNullable(number),
	documentTypeId: createOptionFromNullable(number),
	reviewRequiredRoleId: createOptionFromNullable(number),
	notifyPartyRoleId: createOptionFromNullable(number),
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
	defaultTaskPriority: createOptionFromNullable(
		union([literal('Low'), literal('Normal'), literal('High'), literal('Immediate')]),
	),
	dueDays: createOptionFromNullable(number),
	permittedAgentTypes: createOptionFromNullable(string),
	tasksOnCompletion: createOptionFromNullable(string),
	documentDataHeader: createOptionFromNullable(string),
	documentData: createOptionFromNullable(string),
	docDataString: createOptionFromNullable(string),
	requestBorrower: createOptionFromNullable(boolean),
	alwaysShowPending: createOptionFromNullable(boolean),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
