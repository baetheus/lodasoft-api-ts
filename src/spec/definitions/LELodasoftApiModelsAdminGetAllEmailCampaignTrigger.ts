import {
	LELodasoftApiModelsAdminEmailCampaignTriggerModelView,
	LELodasoftApiModelsAdminEmailCampaignTriggerModelViewIO,
} from '../definitions/LELodasoftApiModelsAdminEmailCampaignTriggerModelView';
import { Option } from 'fp-ts/lib/Option';
import { string, array, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftApiModelsAdminGetAllEmailCampaignTrigger = {
	group: Option<string>;
	listEmailCampaignTriggerModel: Option<Array<LELodasoftApiModelsAdminEmailCampaignTriggerModelView>>;
};
export const LELodasoftApiModelsAdminGetAllEmailCampaignTriggerIO = type({
	group: createOptionFromOptional(string, 'group'),
	listEmailCampaignTriggerModel: createOptionFromOptional(
		array(LELodasoftApiModelsAdminEmailCampaignTriggerModelViewIO),
		'listEmailCampaignTriggerModel',
	),
});
