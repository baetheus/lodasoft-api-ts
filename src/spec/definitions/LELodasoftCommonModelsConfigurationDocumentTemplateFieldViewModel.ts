import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

import { createEnumType } from '@nll/utils-ts/lib/io';

export enum FieldTypeEnum {
	'Unspecified',
	'Text',
	'CheckBox',
	'RadioButton',
}

export type LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel = {
	documentTemplateFieldId: Option<number>;
	documentTemplateId: Option<number>;
	fieldKey: Option<string>;
	fieldType: Option<FieldTypeEnum>;
	displayName: Option<string>;
	globalMergeFieldKey: Option<string>;
	defaultValue: Option<string>;
	visible: Option<boolean>;
	editable: Option<boolean>;
	documentTemplatePageId: Option<number>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModelIO = type({
	documentTemplateFieldId: createOptionFromOptional(number, 'documentTemplateFieldId'),
	documentTemplateId: createOptionFromOptional(number, 'documentTemplateId'),
	fieldKey: createOptionFromOptional(string, 'fieldKey'),
	fieldType: createOptionFromOptional(createEnumType<FieldTypeEnum>(FieldTypeEnum, 'FieldTypeEnum'), 'fieldType'),
	displayName: createOptionFromOptional(string, 'displayName'),
	globalMergeFieldKey: createOptionFromOptional(string, 'globalMergeFieldKey'),
	defaultValue: createOptionFromOptional(string, 'defaultValue'),
	visible: createOptionFromOptional(boolean, 'visible'),
	editable: createOptionFromOptional(boolean, 'editable'),
	documentTemplatePageId: createOptionFromOptional(number, 'documentTemplatePageId'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromDatelike, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromDatelike, 'dateUpdated'),
});
