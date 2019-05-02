import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import { createEnumType } from '../utils/utils';

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
	documentTemplateFieldId: createOptionFromNullable(number, 'documentTemplateFieldId'),
	documentTemplateId: createOptionFromNullable(number, 'documentTemplateId'),
	fieldKey: createOptionFromNullable(string, 'fieldKey'),
	fieldType: createOptionFromNullable(createEnumType<FieldTypeEnum>(FieldTypeEnum, 'FieldTypeEnum'), 'fieldType'),
	displayName: createOptionFromNullable(string, 'displayName'),
	globalMergeFieldKey: createOptionFromNullable(string, 'globalMergeFieldKey'),
	defaultValue: createOptionFromNullable(string, 'defaultValue'),
	visible: createOptionFromNullable(boolean, 'visible'),
	editable: createOptionFromNullable(boolean, 'editable'),
	documentTemplatePageId: createOptionFromNullable(number, 'documentTemplatePageId'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
