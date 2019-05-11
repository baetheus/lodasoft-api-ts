import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsAdminEmailCampaignTaskStatusTriggerViewModel = {
	emailCampaignTaskStatusTriggerId: Option<number>;
	emailCampaignId: Option<number>;
	taskId: Option<number>;
	customTaskId: Option<number>;
	taskStatus: Option<number>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsAdminEmailCampaignTaskStatusTriggerViewModelIO = type({
	emailCampaignTaskStatusTriggerId: createOptionFromOptional(number, 'emailCampaignTaskStatusTriggerId'),
	emailCampaignId: createOptionFromOptional(number, 'emailCampaignId'),
	taskId: createOptionFromOptional(number, 'taskId'),
	customTaskId: createOptionFromOptional(number, 'customTaskId'),
	taskStatus: createOptionFromOptional(number, 'taskStatus'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
