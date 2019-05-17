import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

import { createEnumType } from '@nll/utils-ts/lib/io';

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
	formFreeHistoryId: createOptionFromOptional(number, 'formFreeHistoryId'),
	firstName: createOptionFromOptional(string, 'firstName'),
	lastName: createOptionFromOptional(string, 'lastName'),
	email: createOptionFromOptional(string, 'email'),
	last4Ssn: createOptionFromOptional(string, 'last4Ssn'),
	voaRequestType: createOptionFromOptional(
		createEnumType<VoaRequestTypeEnum>(VoaRequestTypeEnum, 'VoaRequestTypeEnum'),
		'voaRequestType',
	),
	transactionId: createOptionFromOptional(string, 'transactionId'),
	accountChekOrderId: createOptionFromOptional(string, 'accountChekOrderId'),
	reportId: createOptionFromOptional(string, 'reportId'),
	orderStatus: createOptionFromOptional(number, 'orderStatus'),
	loginUrl: createOptionFromOptional(string, 'loginUrl'),
	status: createOptionFromOptional(string, 'status'),
	leadId: createOptionFromOptional(number, 'leadId'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	loanDocTaskId: createOptionFromOptional(number, 'loanDocTaskId'),
	taskStatus: createOptionFromOptional(
		createEnumType<TaskStatusEnum>(TaskStatusEnum, 'TaskStatusEnum'),
		'taskStatus',
	),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromDatelike, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromDatelike, 'dateUpdated'),
});
