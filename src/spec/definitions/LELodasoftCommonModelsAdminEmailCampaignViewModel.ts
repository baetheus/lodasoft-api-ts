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
	emailCampaignId: createOptionFromNullable(number, 'emailCampaignId'),
	emailCampaignName: createOptionFromNullable(string, 'emailCampaignName'),
	repeatDays: createOptionFromNullable(number, 'repeatDays'),
	active: createOptionFromNullable(boolean, 'active'),
	triggers: createOptionFromNullable(
		array(LELodasoftCommonModelsAdminEmailCampaignLoanStatusTriggerViewModelIO),
		'triggers',
	),
	taskStatusTriggers: createOptionFromNullable(
		array(LELodasoftCommonModelsAdminEmailCampaignTaskStatusTriggerViewModelIO),
		'taskStatusTriggers',
	),
	automatedEmails: createOptionFromNullable(
		array(LELodasoftCommonModelsAdminAutomatedEmailViewModelIO),
		'automatedEmails',
	),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
