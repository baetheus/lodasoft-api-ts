import { Option } from 'fp-ts/lib/Option';
import { array, boolean, number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import {
	LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel,
	LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel';
import { createEnumType } from '../utils/utils';

export enum DocumentTemplateTypeEnum {
	'Unspecified',
	'Html',
	'Pdf',
}

export type LELodasoftCommonModelsConfigurationDocumentTemplateViewModel = {
	documentTemplateId: Option<number>;
	documentTypeId: Option<number>;
	documentTemplateType: Option<DocumentTemplateTypeEnum>;
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
		createEnumType<DocumentTemplateTypeEnum>(DocumentTemplateTypeEnum, 'DocumentTemplateTypeEnum'),
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
