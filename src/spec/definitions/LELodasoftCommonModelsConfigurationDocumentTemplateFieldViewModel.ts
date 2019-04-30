import { Option } from 'fp-ts/lib/Option';
import { number, string, keyof, boolean, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel = {
	documentTemplateFieldId: Option<number>;
	documentTemplateId: Option<number>;
	fieldKey: Option<string>;
	fieldType: Option<'Unspecified' | 'Text' | 'CheckBox' | 'RadioButton'>;
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
	fieldType: createOptionFromNullable(
		keyof({ Unspecified: null, Text: null, CheckBox: null, RadioButton: null }),
		'fieldType',
	),
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
