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
	emailCampaignLoanStatusTriggerId: createOptionFromNullable(number, 'emailCampaignLoanStatusTriggerId'),
	emailCampaignId: createOptionFromNullable(number, 'emailCampaignId'),
	loanPurposeId: createOptionFromNullable(number, 'loanPurposeId'),
	loanStatusId: createOptionFromNullable(number, 'loanStatusId'),
	loanTypeId: createOptionFromNullable(number, 'loanTypeId'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
