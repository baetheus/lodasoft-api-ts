import { Option } from 'fp-ts/lib/Option';
import { number, string, union, literal, type } from 'io-ts';
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
	formFreeHistoryId: createOptionFromNullable(number),
	firstName: createOptionFromNullable(string),
	lastName: createOptionFromNullable(string),
	email: createOptionFromNullable(string),
	last4Ssn: createOptionFromNullable(string),
	voaRequestType: createOptionFromNullable(union([literal('full'), literal('lite')])),
	transactionId: createOptionFromNullable(string),
	accountChekOrderId: createOptionFromNullable(string),
	reportId: createOptionFromNullable(string),
	orderStatus: createOptionFromNullable(number),
	loginUrl: createOptionFromNullable(string),
	status: createOptionFromNullable(string),
	leadId: createOptionFromNullable(number),
	applicationId: createOptionFromNullable(number),
	borrowerId: createOptionFromNullable(number),
	loanDocTaskId: createOptionFromNullable(number),
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
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
