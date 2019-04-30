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
import { number, string, keyof, boolean, type } from 'io-ts';
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
	option: createOptionFromNullable(keyof({ Immediately: null, OnLoanStatus: null }), 'option'),
	applyTo: createOptionFromNullable(keyof({ Loan: null, PrimaryBorrower: null, SelectBorrowers: null }), 'applyTo'),
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
	taskType: createOptionFromNullable(
		keyof({
			RequestDocument: null,
			ViewDocument: null,
			AcknowledgeReceipt: null,
			EsignDocument: null,
			RequestInformation: null,
			PerformAction: null,
			OnlineApplication: null,
			DigitalAssetVerification: null,
		}),
		'taskType',
	),
	dueDays: createOptionFromNullable(number, 'dueDays'),
	permittedAgentTypes: createOptionFromNullable(string, 'permittedAgentTypes'),
	tasksOnCompletion: createOptionFromNullable(string, 'tasksOnCompletion'),
	documentDataHeader: createOptionFromNullable(string, 'documentDataHeader'),
	defaultTaskPriority: createOptionFromNullable(
		keyof({ Low: null, Normal: null, High: null, Immediate: null }),
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
