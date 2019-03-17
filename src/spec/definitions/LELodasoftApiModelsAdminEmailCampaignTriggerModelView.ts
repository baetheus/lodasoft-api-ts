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
	id: createOptionFromNullable(number),
	emailCampaignId: createOptionFromNullable(number),
	fieldName: createOptionFromNullable(number),
	comparisionType: createOptionFromNullable(number),
	compareValue: createOptionFromNullable(string),
	companyId: createOptionFromNullable(number),
	group: createOptionFromNullable(string),
	emailCampaignIdString: createOptionFromNullable(string),
	comparisionTypeString: createOptionFromNullable(string),
	fieldNameString: createOptionFromNullable(string),
	listComparision: createOptionFromNullable(array(LELodasoftDataAccessDbModelsAdminLookupTypeModelIO)),
	listEmailCampaign: createOptionFromNullable(array(LELodasoftDataAccessDbModelsConfigurationEmailCampaignModelIO)),
	listGlobalEmail: createOptionFromNullable(
		array(LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModelIO),
	),
});
