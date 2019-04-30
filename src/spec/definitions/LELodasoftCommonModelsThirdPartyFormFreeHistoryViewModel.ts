import { Option } from 'fp-ts/lib/Option';
import { number, string, keyof, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModel = {
	formFreeHistoryId: Option<number>;
	firstName: Option<string>;
	lastName: Option<string>;
	email: Option<string>;
	last4Ssn: Option<string>;
	voaRequestType: Option<'full' | 'lite'>;
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
	taskStatus: Option<
		'Pending' | 'Submitted' | 'Rejected' | 'Approved' | 'NotApplicable' | 'Requested' | 'Completed' | 'ReviewReady'
	>;
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
	voaRequestType: createOptionFromNullable(keyof({ full: null, lite: null }), 'voaRequestType'),
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
		'taskStatus',
	),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
