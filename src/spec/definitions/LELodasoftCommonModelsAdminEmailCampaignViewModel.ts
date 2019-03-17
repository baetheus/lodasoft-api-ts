import {
	LELodasoftCommonModelsAdminAutomatedEmailViewModel,
	LELodasoftCommonModelsAdminAutomatedEmailViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminAutomatedEmailViewModel';
import {
	LELodasoftCommonModelsAdminEmailCampaignLoanStatusTriggerViewModel,
	LELodasoftCommonModelsAdminEmailCampaignLoanStatusTriggerViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminEmailCampaignLoanStatusTriggerViewModel';
import {
	LELodasoftCommonModelsAdminEmailCampaignTaskStatusTriggerViewModel,
	LELodasoftCommonModelsAdminEmailCampaignTaskStatusTriggerViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminEmailCampaignTaskStatusTriggerViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, array, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsAdminEmailCampaignViewModel = {
	emailCampaignId: Option<number>;
	emailCampaignName: Option<string>;
	repeatDays: Option<number>;
	active: Option<boolean>;
	triggers: Option<Array<LELodasoftCommonModelsAdminEmailCampaignLoanStatusTriggerViewModel>>;
	taskStatusTriggers: Option<Array<LELodasoftCommonModelsAdminEmailCampaignTaskStatusTriggerViewModel>>;
	automatedEmails: Option<Array<LELodasoftCommonModelsAdminAutomatedEmailViewModel>>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsAdminEmailCampaignViewModelIO = type({
	emailCampaignId: createOptionFromNullable(number),
	emailCampaignName: createOptionFromNullable(string),
	repeatDays: createOptionFromNullable(number),
	active: createOptionFromNullable(boolean),
	triggers: createOptionFromNullable(array(LELodasoftCommonModelsAdminEmailCampaignLoanStatusTriggerViewModelIO)),
	taskStatusTriggers: createOptionFromNullable(
		array(LELodasoftCommonModelsAdminEmailCampaignTaskStatusTriggerViewModelIO),
	),
	automatedEmails: createOptionFromNullable(array(LELodasoftCommonModelsAdminAutomatedEmailViewModelIO)),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
