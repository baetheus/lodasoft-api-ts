import { createEnumType } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';
import { Option } from 'fp-ts/lib/Option';
import { array, boolean, number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';

import {
	LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel,
	LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel';

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
	documentTemplateId: createOptionFromOptional(number, 'documentTemplateId'),
	documentTypeId: createOptionFromOptional(number, 'documentTypeId'),
	documentTemplateType: createOptionFromOptional(
		createEnumType<DocumentTemplateTypeEnum>(DocumentTemplateTypeEnum, 'DocumentTemplateTypeEnum'),
		'documentTemplateType',
	),
	documentTemplateName: createOptionFromOptional(string, 'documentTemplateName'),
	description: createOptionFromOptional(string, 'description'),
	headerHtml: createOptionFromOptional(string, 'headerHtml'),
	bodyHtml: createOptionFromOptional(string, 'bodyHtml'),
	footerHtml: createOptionFromOptional(string, 'footerHtml'),
	hasPdfData: createOptionFromOptional(boolean, 'hasPdfData'),
	pdfData: createOptionFromOptional(string, 'pdfData'),
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
