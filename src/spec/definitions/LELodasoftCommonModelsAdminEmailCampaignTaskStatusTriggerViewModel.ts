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
	emailCampaignTaskStatusTriggerId: createOptionFromNullable(number),
	emailCampaignId: createOptionFromNullable(number),
	taskId: createOptionFromNullable(number),
	customTaskId: createOptionFromNullable(number),
	taskStatus: createOptionFromNullable(number),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
