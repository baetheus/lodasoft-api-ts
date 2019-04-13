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
	documentTemplateFieldId: createOptionFromNullable(number),
	documentTemplateId: createOptionFromNullable(number),
	fieldKey: createOptionFromNullable(string),
	fieldType: createOptionFromNullable(keyof({ Unspecified: null, Text: null, CheckBox: null, RadioButton: null })),
	displayName: createOptionFromNullable(string),
	globalMergeFieldKey: createOptionFromNullable(string),
	defaultValue: createOptionFromNullable(string),
	visible: createOptionFromNullable(boolean),
	editable: createOptionFromNullable(boolean),
	documentTemplatePageId: createOptionFromNullable(number),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
