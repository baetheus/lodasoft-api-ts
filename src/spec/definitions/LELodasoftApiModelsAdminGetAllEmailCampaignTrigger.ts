import {
	LELodasoftApiModelsAdminEmailCampaignTriggerModelView,
	LELodasoftApiModelsAdminEmailCampaignTriggerModelViewIO,
} from '../definitions/LELodasoftApiModelsAdminEmailCampaignTriggerModelView';
import { Option } from 'fp-ts/lib/Option';
import { string, array, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsAdminGetAllEmailCampaignTrigger = {
	group: Option<string>;
	listEmailCampaignTriggerModel: Option<Array<LELodasoftApiModelsAdminEmailCampaignTriggerModelView>>;
};
export const LELodasoftApiModelsAdminGetAllEmailCampaignTriggerIO = type({
	group: createOptionFromNullable(string, 'group'),
	listEmailCampaignTriggerModel: createOptionFromNullable(
		array(LELodasoftApiModelsAdminEmailCampaignTriggerModelViewIO),
		'listEmailCampaignTriggerModel',
	),
});
