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
import { createOptionFromNullable } from 'io-ts-types';

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
	id: createOptionFromNullable(number, 'id'),
	emailCampaignId: createOptionFromNullable(number, 'emailCampaignId'),
	fieldName: createOptionFromNullable(number, 'fieldName'),
	comparisionType: createOptionFromNullable(number, 'comparisionType'),
	compareValue: createOptionFromNullable(string, 'compareValue'),
	companyId: createOptionFromNullable(number, 'companyId'),
	group: createOptionFromNullable(string, 'group'),
	emailCampaignIdString: createOptionFromNullable(string, 'emailCampaignIdString'),
	comparisionTypeString: createOptionFromNullable(string, 'comparisionTypeString'),
	fieldNameString: createOptionFromNullable(string, 'fieldNameString'),
	listComparision: createOptionFromNullable(
		array(LELodasoftDataAccessDbModelsAdminLookupTypeModelIO),
		'listComparision',
	),
	listEmailCampaign: createOptionFromNullable(
		array(LELodasoftDataAccessDbModelsConfigurationEmailCampaignModelIO),
		'listEmailCampaign',
	),
	listGlobalEmail: createOptionFromNullable(
		array(LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModelIO),
		'listGlobalEmail',
	),
});
