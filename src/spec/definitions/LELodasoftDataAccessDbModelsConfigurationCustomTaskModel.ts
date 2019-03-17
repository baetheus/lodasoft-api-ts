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
import { Option } from 'fp-ts/lib/Option';
import { number, string, union, literal, boolean, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsConfigurationCustomTaskModel = {
	customTaskId: Option<number>;
	taskCategoryId: Option<number>;
	taskCategoryModel: Option<LELodasoftDataAccessDbModelsConfigurationCharacteristicModel>;
	loanStatusId: Option<number>;
	loanStatusModel: Option<LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>;
	taskDescription: Option<string>;
	option: Option<'Immediately' | 'OnLoanStatus'>;
	applyTo: Option<'Loan' | 'PrimaryBorrower' | 'SelectBorrowers'>;
	roleId: Option<number>;
	roleModel: Option<LELodasoftDataAccessDbModelsConfigurationRoleModel>;
	documentTypeId: Option<number>;
	documentType: Option<LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel>;
	reviewRequiredRoleId: Option<number>;
	reviewRequiredRoleModel: Option<LELodasoftDataAccessDbModelsConfigurationRoleModel>;
	notifyPartyRoleId: Option<number>;
	notifyPartyRoleModel: Option<LELodasoftDataAccessDbModelsConfigurationRoleModel>;
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
	dueDays: Option<number>;
	permittedAgentTypes: Option<string>;
	tasksOnCompletion: Option<string>;
	documentDataHeader: Option<string>;
	defaultTaskPriority: Option<'Low' | 'Normal' | 'High' | 'Immediate'>;
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
	customTaskId: createOptionFromNullable(number),
	taskCategoryId: createOptionFromNullable(number),
	taskCategoryModel: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationCharacteristicModelIO),
	loanStatusId: createOptionFromNullable(number),
	loanStatusModel: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO),
	taskDescription: createOptionFromNullable(string),
	option: createOptionFromNullable(union([literal('Immediately'), literal('OnLoanStatus')])),
	applyTo: createOptionFromNullable(union([literal('Loan'), literal('PrimaryBorrower'), literal('SelectBorrowers')])),
	roleId: createOptionFromNullable(number),
	roleModel: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationRoleModelIO),
	documentTypeId: createOptionFromNullable(number),
	documentType: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationDocumentTypeModelIO),
	reviewRequiredRoleId: createOptionFromNullable(number),
	reviewRequiredRoleModel: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationRoleModelIO),
	notifyPartyRoleId: createOptionFromNullable(number),
	notifyPartyRoleModel: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationRoleModelIO),
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
	dueDays: createOptionFromNullable(number),
	permittedAgentTypes: createOptionFromNullable(string),
	tasksOnCompletion: createOptionFromNullable(string),
	documentDataHeader: createOptionFromNullable(string),
	defaultTaskPriority: createOptionFromNullable(
		union([literal('Low'), literal('Normal'), literal('High'), literal('Immediate')]),
	),
	docDataString: createOptionFromNullable(string),
	requestBorrower: createOptionFromNullable(boolean),
	alwaysShowPending: createOptionFromNullable(boolean),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
