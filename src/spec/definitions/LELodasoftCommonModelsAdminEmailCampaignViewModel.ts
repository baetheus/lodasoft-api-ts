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
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	emailCampaignId: createOptionFromOptional(number, 'emailCampaignId'),
	emailCampaignName: createOptionFromOptional(string, 'emailCampaignName'),
	repeatDays: createOptionFromOptional(number, 'repeatDays'),
	active: createOptionFromOptional(boolean, 'active'),
	triggers: createOptionFromOptional(
		array(LELodasoftCommonModelsAdminEmailCampaignLoanStatusTriggerViewModelIO),
		'triggers',
	),
	taskStatusTriggers: createOptionFromOptional(
		array(LELodasoftCommonModelsAdminEmailCampaignTaskStatusTriggerViewModelIO),
		'taskStatusTriggers',
	),
	automatedEmails: createOptionFromOptional(
		array(LELodasoftCommonModelsAdminAutomatedEmailViewModelIO),
		'automatedEmails',
	),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromDatelike, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromDatelike, 'dateUpdated'),
});
