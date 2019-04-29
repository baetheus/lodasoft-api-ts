import { LELodasoftCommonModelsConfigurationWizardValidViewModel } from '../definitions/LELodasoftCommonModelsConfigurationWizardValidViewModel';
import { LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel } from '../definitions/LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsWizardModelsWizardQuestionDataViewModel = {
    question: Option<LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel>;
    valid: Option<LELodasoftCommonModelsConfigurationWizardValidViewModel>;
};
export declare const LELodasoftApiModelsWizardModelsWizardQuestionDataViewModelIO: import("io-ts").TypeC<{
    question: import("io-ts-types").OptionFromNullableC<import("io-ts").TypeC<{
        id: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        categoryId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        dataId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        groupId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        name: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        question: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        additional: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        validate: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
        updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    }>>;
    valid: import("io-ts-types").OptionFromNullableC<import("io-ts").TypeC<{
        id: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        questionId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        min: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        max: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        required: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    }>>;
}>;
