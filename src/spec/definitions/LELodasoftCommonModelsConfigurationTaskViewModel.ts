import { Option } from 'fp-ts/lib/Option';
import { number, string, keyof, boolean, type } from 'io-ts';
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
	taskId: createOptionFromNullable(number, 'taskId'),
	taskName: createOptionFromNullable(string, 'taskName'),
	triggerAssociations: createOptionFromNullable(string, 'triggerAssociations'),
	borrowerTrigger: createOptionFromNullable(
		keyof({ Loan: null, PrimaryBorrower: null, AllBorrowers: null, SelectBorrowers: null }),
		'borrowerTrigger',
	),
	isLeadTask: createOptionFromNullable(boolean, 'isLeadTask'),
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
