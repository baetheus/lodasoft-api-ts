import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import { createEnumType } from '../utils/utils';

export enum VoaRequestTypeEnum {
	'full',
	'lite',
}

export enum TaskStatusEnum {
	'Pending',
	'Submitted',
	'Rejected',
	'Approved',
	'NotApplicable',
	'Requested',
	'Completed',
	'ReviewReady',
}

export type LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModel = {
	formFreeHistoryId: Option<number>;
	firstName: Option<string>;
	lastName: Option<string>;
	email: Option<string>;
	last4Ssn: Option<string>;
	voaRequestType: Option<VoaRequestTypeEnum>;
	transactionId: Option<string>;
	accountChekOrderId: Option<string>;
	reportId: Option<string>;
	orderStatus: Option<number>;
	loginUrl: Option<string>;
	status: Option<string>;
	leadId: Option<number>;
	applicationId: Option<number>;
	borrowerId: Option<number>;
	loanDocTaskId: Option<number>;
	taskStatus: Option<TaskStatusEnum>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModelIO = type({
	formFreeHistoryId: createOptionFromNullable(number, 'formFreeHistoryId'),
	firstName: createOptionFromNullable(string, 'firstName'),
	lastName: createOptionFromNullable(string, 'lastName'),
	email: createOptionFromNullable(string, 'email'),
	last4Ssn: createOptionFromNullable(string, 'last4Ssn'),
	voaRequestType: createOptionFromNullable(
		createEnumType<VoaRequestTypeEnum>(VoaRequestTypeEnum, 'VoaRequestTypeEnum'),
		'voaRequestType',
	),
	transactionId: createOptionFromNullable(string, 'transactionId'),
	accountChekOrderId: createOptionFromNullable(string, 'accountChekOrderId'),
	reportId: createOptionFromNullable(string, 'reportId'),
	orderStatus: createOptionFromNullable(number, 'orderStatus'),
	loginUrl: createOptionFromNullable(string, 'loginUrl'),
	status: createOptionFromNullable(string, 'status'),
	leadId: createOptionFromNullable(number, 'leadId'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	loanDocTaskId: createOptionFromNullable(number, 'loanDocTaskId'),
	taskStatus: createOptionFromNullable(
		createEnumType<TaskStatusEnum>(TaskStatusEnum, 'TaskStatusEnum'),
		'taskStatus',
	),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
