import {
	LELodasoftCommonModelsConfigurationCustomTaskViewModel,
	LELodasoftCommonModelsConfigurationCustomTaskViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationCustomTaskViewModel';
import {
	LELodasoftCommonModelsConfigurationTaskViewModel,
	LELodasoftCommonModelsConfigurationTaskViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationTaskViewModel';
import {
	LELodasoftCommonModelsLoanLoanDocViewModel,
	LELodasoftCommonModelsLoanLoanDocViewModelIO,
} from '../definitions/LELodasoftCommonModelsLoanLoanDocViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, keyof, boolean, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsLoanLoanDocTaskViewModel = {
	loanDocTaskId: Option<number>;
	leadId: Option<number>;
	applicationId: Option<number>;
	borrowerId: Option<number>;
	taskId: Option<number>;
	customTaskId: Option<number>;
	loanDocId: Option<number>;
	documentTypeId: Option<number>;
	userId: Option<string>;
	roleId: Option<number>;
	notifyPartyId: Option<string>;
	reviewPartyId: Option<string>;
	templateDocumentUrl: Option<string>;
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
	taskPriority: Option<'Low' | 'Normal' | 'High' | 'Immediate'>;
	description: Option<string>;
	note: Option<string>;
	borrowerFacingNote: Option<string>;
	requestedBy: Option<string>;
	dueDays: Option<number>;
	taskStatus: Option<
		'Pending' | 'Submitted' | 'Rejected' | 'Approved' | 'NotApplicable' | 'Requested' | 'Completed' | 'ReviewReady'
	>;
	conditionStatus: Option<'ConditionPending' | 'ConditionCleared' | 'ConditionReOpened'>;
	conditionType: Option<'PTS' | 'PTD' | 'PTF' | 'PTC'>;
	requestBorrower: Option<boolean>;
	condition: Option<boolean>;
	requiresReview: Option<boolean>;
	requestDate: Option<Date>;
	dueDate: Option<Date>;
	submittedDate: Option<Date>;
	acknowledgementDate: Option<Date>;
	completeDate: Option<Date>;
	followUpDate: Option<Date>;
	active: Option<boolean>;
	taskModel: Option<LELodasoftCommonModelsConfigurationTaskViewModel>;
	customTaskModel: Option<LELodasoftCommonModelsConfigurationCustomTaskViewModel>;
	loanDocModel: Option<LELodasoftCommonModelsLoanLoanDocViewModel>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsLoanLoanDocTaskViewModelIO = type({
	loanDocTaskId: createOptionFromNullable(number),
	leadId: createOptionFromNullable(number),
	applicationId: createOptionFromNullable(number),
	borrowerId: createOptionFromNullable(number),
	taskId: createOptionFromNullable(number),
	customTaskId: createOptionFromNullable(number),
	loanDocId: createOptionFromNullable(number),
	documentTypeId: createOptionFromNullable(number),
	userId: createOptionFromNullable(string),
	roleId: createOptionFromNullable(number),
	notifyPartyId: createOptionFromNullable(string),
	reviewPartyId: createOptionFromNullable(string),
	templateDocumentUrl: createOptionFromNullable(string),
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
	),
	taskPriority: createOptionFromNullable(keyof({ Low: null, Normal: null, High: null, Immediate: null })),
	description: createOptionFromNullable(string),
	note: createOptionFromNullable(string),
	borrowerFacingNote: createOptionFromNullable(string),
	requestedBy: createOptionFromNullable(string),
	dueDays: createOptionFromNullable(number),
	taskStatus: createOptionFromNullable(
		keyof({
			Pending: null,
			Submitted: null,
			Rejected: null,
			Approved: null,
			NotApplicable: null,
			Requested: null,
			Completed: null,
			ReviewReady: null,
		}),
	),
	conditionStatus: createOptionFromNullable(
		keyof({ ConditionPending: null, ConditionCleared: null, ConditionReOpened: null }),
	),
	conditionType: createOptionFromNullable(keyof({ PTS: null, PTD: null, PTF: null, PTC: null })),
	requestBorrower: createOptionFromNullable(boolean),
	condition: createOptionFromNullable(boolean),
	requiresReview: createOptionFromNullable(boolean),
	requestDate: createOptionFromNullable(DateFromISOString),
	dueDate: createOptionFromNullable(DateFromISOString),
	submittedDate: createOptionFromNullable(DateFromISOString),
	acknowledgementDate: createOptionFromNullable(DateFromISOString),
	completeDate: createOptionFromNullable(DateFromISOString),
	followUpDate: createOptionFromNullable(DateFromISOString),
	active: createOptionFromNullable(boolean),
	taskModel: createOptionFromNullable(LELodasoftCommonModelsConfigurationTaskViewModelIO),
	customTaskModel: createOptionFromNullable(LELodasoftCommonModelsConfigurationCustomTaskViewModelIO),
	loanDocModel: createOptionFromNullable(LELodasoftCommonModelsLoanLoanDocViewModelIO),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
