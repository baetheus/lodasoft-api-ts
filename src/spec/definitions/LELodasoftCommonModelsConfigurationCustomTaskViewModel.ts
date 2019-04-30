import { Option } from 'fp-ts/lib/Option';
import { number, string, keyof, boolean, type } from 'io-ts';
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
	customTaskId: createOptionFromNullable(number, 'customTaskId'),
	taskCategoryId: createOptionFromNullable(number, 'taskCategoryId'),
	loanStatusId: createOptionFromNullable(number, 'loanStatusId'),
	taskDescription: createOptionFromNullable(string, 'taskDescription'),
	option: createOptionFromNullable(keyof({ Immediately: null, OnLoanStatus: null }), 'option'),
	applyTo: createOptionFromNullable(keyof({ Loan: null, PrimaryBorrower: null, SelectBorrowers: null }), 'applyTo'),
	roleId: createOptionFromNullable(number, 'roleId'),
	documentTypeId: createOptionFromNullable(number, 'documentTypeId'),
	reviewRequiredRoleId: createOptionFromNullable(number, 'reviewRequiredRoleId'),
	notifyPartyRoleId: createOptionFromNullable(number, 'notifyPartyRoleId'),
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
	defaultTaskPriority: createOptionFromNullable(
		keyof({ Low: null, Normal: null, High: null, Immediate: null }),
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
