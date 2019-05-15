import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	emailCampaignLoanStatusTriggerId: createOptionFromOptional(number, 'emailCampaignLoanStatusTriggerId'),
	emailCampaignId: createOptionFromOptional(number, 'emailCampaignId'),
	loanPurposeId: createOptionFromOptional(number, 'loanPurposeId'),
	loanStatusId: createOptionFromOptional(number, 'loanStatusId'),
	loanTypeId: createOptionFromOptional(number, 'loanTypeId'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
