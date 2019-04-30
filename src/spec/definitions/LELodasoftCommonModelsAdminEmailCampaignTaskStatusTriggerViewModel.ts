import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

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
	emailCampaignTaskStatusTriggerId: createOptionFromNullable(number, 'emailCampaignTaskStatusTriggerId'),
	emailCampaignId: createOptionFromNullable(number, 'emailCampaignId'),
	taskId: createOptionFromNullable(number, 'taskId'),
	customTaskId: createOptionFromNullable(number, 'customTaskId'),
	taskStatus: createOptionFromNullable(number, 'taskStatus'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
