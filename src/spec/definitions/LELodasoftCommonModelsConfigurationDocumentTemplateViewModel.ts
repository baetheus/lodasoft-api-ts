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
	documentTemplateId: createOptionFromNullable(number, 'documentTemplateId'),
	documentTypeId: createOptionFromNullable(number, 'documentTypeId'),
	documentTemplateType: createOptionFromNullable(
		keyof({ Unspecified: null, Html: null, Pdf: null }),
		'documentTemplateType',
	),
	documentTemplateName: createOptionFromNullable(string, 'documentTemplateName'),
	description: createOptionFromNullable(string, 'description'),
	headerHtml: createOptionFromNullable(string, 'headerHtml'),
	bodyHtml: createOptionFromNullable(string, 'bodyHtml'),
	footerHtml: createOptionFromNullable(string, 'footerHtml'),
	hasPdfData: createOptionFromNullable(boolean, 'hasPdfData'),
	pdfData: createOptionFromNullable(string, 'pdfData'),
	fields: createOptionFromNullable(
		array(LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModelIO),
		'fields',
	),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
