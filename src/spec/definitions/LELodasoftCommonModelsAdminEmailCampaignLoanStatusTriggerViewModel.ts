import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsAdminEmailCampaignLoanStatusTriggerViewModel = {
	emailCampaignLoanStatusTriggerId: Option<number>;
	emailCampaignId: Option<number>;
	loanPurposeId: Option<number>;
	loanStatusId: Option<number>;
	loanTypeId: Option<number>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsAdminEmailCampaignLoanStatusTriggerViewModelIO = type({
	emailCampaignLoanStatusTriggerId: createOptionFromNullable(number),
	emailCampaignId: createOptionFromNullable(number),
	loanPurposeId: createOptionFromNullable(number),
	loanStatusId: createOptionFromNullable(number),
	loanTypeId: createOptionFromNullable(number),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
