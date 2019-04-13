import {
	LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel,
	LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, keyof, string, boolean, array, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsConfigurationDocumentTemplateViewModel = {
	documentTemplateId: Option<number>;
	documentTypeId: Option<number>;
	documentTemplateType: Option<'Unspecified' | 'Html' | 'Pdf'>;
	documentTemplateName: Option<string>;
	description: Option<string>;
	headerHtml: Option<string>;
	bodyHtml: Option<string>;
	footerHtml: Option<string>;
	hasPdfData: Option<boolean>;
	pdfData: Option<string>;
	fields: Option<Array<LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel>>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsConfigurationDocumentTemplateViewModelIO = type({
	documentTemplateId: createOptionFromNullable(number),
	documentTypeId: createOptionFromNullable(number),
	documentTemplateType: createOptionFromNullable(keyof({ Unspecified: null, Html: null, Pdf: null })),
	documentTemplateName: createOptionFromNullable(string),
	description: createOptionFromNullable(string),
	headerHtml: createOptionFromNullable(string),
	bodyHtml: createOptionFromNullable(string),
	footerHtml: createOptionFromNullable(string),
	hasPdfData: createOptionFromNullable(boolean),
	pdfData: createOptionFromNullable(string),
	fields: createOptionFromNullable(array(LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModelIO)),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
