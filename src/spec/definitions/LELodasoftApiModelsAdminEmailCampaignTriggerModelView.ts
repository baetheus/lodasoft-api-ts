import {
	LELodasoftDataAccessDbModelsAdminLookupTypeModel,
	LELodasoftDataAccessDbModelsAdminLookupTypeModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsAdminLookupTypeModel';
import {
	LELodasoftDataAccessDbModelsConfigurationEmailCampaignModel,
	LELodasoftDataAccessDbModelsConfigurationEmailCampaignModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationEmailCampaignModel';
import {
	LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModel,
	LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, array, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftApiModelsAdminEmailCampaignTriggerModelView = {
	id: Option<number>;
	emailCampaignId: Option<number>;
	fieldName: Option<number>;
	comparisionType: Option<number>;
	compareValue: Option<string>;
	companyId: Option<number>;
	group: Option<string>;
	emailCampaignIdString: Option<string>;
	comparisionTypeString: Option<string>;
	fieldNameString: Option<string>;
	listComparision: Option<Array<LELodasoftDataAccessDbModelsAdminLookupTypeModel>>;
	listEmailCampaign: Option<Array<LELodasoftDataAccessDbModelsConfigurationEmailCampaignModel>>;
	listGlobalEmail: Option<Array<LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModel>>;
};
export const LELodasoftApiModelsAdminEmailCampaignTriggerModelViewIO = type({
	id: createOptionFromOptional(number, 'id'),
	emailCampaignId: createOptionFromOptional(number, 'emailCampaignId'),
	fieldName: createOptionFromOptional(number, 'fieldName'),
	comparisionType: createOptionFromOptional(number, 'comparisionType'),
	compareValue: createOptionFromOptional(string, 'compareValue'),
	companyId: createOptionFromOptional(number, 'companyId'),
	group: createOptionFromOptional(string, 'group'),
	emailCampaignIdString: createOptionFromOptional(string, 'emailCampaignIdString'),
	comparisionTypeString: createOptionFromOptional(string, 'comparisionTypeString'),
	fieldNameString: createOptionFromOptional(string, 'fieldNameString'),
	listComparision: createOptionFromOptional(
		array(LELodasoftDataAccessDbModelsAdminLookupTypeModelIO),
		'listComparision',
	),
	listEmailCampaign: createOptionFromOptional(
		array(LELodasoftDataAccessDbModelsConfigurationEmailCampaignModelIO),
		'listEmailCampaign',
	),
	listGlobalEmail: createOptionFromOptional(
		array(LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModelIO),
		'listGlobalEmail',
	),
});
