import { Option } from 'fp-ts/lib/Option';
import { number, string, union, literal, boolean, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsAdminLoanDocTaskModel = {
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
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftDataAccessDbModelsAdminLoanDocTaskModelIO = type({
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
	taskPriority: createOptionFromNullable(
		union([literal('Low'), literal('Normal'), literal('High'), literal('Immediate')]),
	),
	description: createOptionFromNullable(string),
	note: createOptionFromNullable(string),
	borrowerFacingNote: createOptionFromNullable(string),
	requestedBy: createOptionFromNullable(string),
	dueDays: createOptionFromNullable(number),
	taskStatus: createOptionFromNullable(
		union([
			literal('Pending'),
			literal('Submitted'),
			literal('Rejected'),
			literal('Approved'),
			literal('NotApplicable'),
			literal('Requested'),
			literal('Completed'),
			literal('ReviewReady'),
		]),
	),
	conditionStatus: createOptionFromNullable(
		union([literal('ConditionPending'), literal('ConditionCleared'), literal('ConditionReOpened')]),
	),
	conditionType: createOptionFromNullable(union([literal('PTS'), literal('PTD'), literal('PTF'), literal('PTC')])),
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
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
