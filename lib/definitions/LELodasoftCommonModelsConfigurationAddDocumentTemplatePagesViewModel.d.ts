import { LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModel } from '../definitions/LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModel';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsConfigurationAddDocumentTemplatePagesViewModel = {
    pages: Option<Array<LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModel>>;
};
export declare const LELodasoftCommonModelsConfigurationAddDocumentTemplatePagesViewModelIO: import("io-ts").TypeC<{
    pages: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
        documentTemplatePageId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        documentTemplateId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        title: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        fields: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
            documentTemplateFieldId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            documentTemplateId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            fieldKey: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            fieldType: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
                Unspecified: null;
                Text: null;
                CheckBox: null;
                RadioButton: null;
            }>>;
            displayName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            globalMergeFieldKey: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            defaultValue: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            visible: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
            editable: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
            documentTemplatePageId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
            updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
        }>>>;
        companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
        updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    }>>>;
}>;
