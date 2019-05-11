import {
	LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel,
	LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, array, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModel = {
	documentTemplatePageId: Option<number>;
	documentTemplateId: Option<number>;
	title: Option<string>;
	fields: Option<Array<LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel>>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModelIO = type({
	documentTemplatePageId: createOptionFromOptional(number, 'documentTemplatePageId'),
	documentTemplateId: createOptionFromOptional(number, 'documentTemplateId'),
	title: createOptionFromOptional(string, 'title'),
	fields: createOptionFromOptional(
		array(LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModelIO),
		'fields',
	),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
