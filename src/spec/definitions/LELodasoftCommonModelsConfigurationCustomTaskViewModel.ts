import { Option } from 'fp-ts/lib/Option';
import { number, string, union, literal, boolean, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsConfigurationCustomTaskViewModel = {
	customTaskId: Option<number>;
	taskCategoryId: Option<number>;
	loanStatusId: Option<number>;
	taskDescription: Option<string>;
	option: Option<'Immediately' | 'OnLoanStatus'>;
	applyTo: Option<'Loan' | 'PrimaryBorrower' | 'SelectBorrowers'>;
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
export const LELodasoftCommonModelsConfigurationCustomTaskViewModelIO = type({
	customTaskId: createOptionFromNullable(number),
	taskCategoryId: createOptionFromNullable(number),
	loanStatusId: createOptionFromNullable(number),
	taskDescription: createOptionFromNullable(string),
	option: createOptionFromNullable(union([literal('Immediately'), literal('OnLoanStatus')])),
	applyTo: createOptionFromNullable(union([literal('Loan'), literal('PrimaryBorrower'), literal('SelectBorrowers')])),
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
