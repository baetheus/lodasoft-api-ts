import { LELodasoftCommonModelsConfigurationWizardDataViewModel } from '../definitions/LELodasoftCommonModelsConfigurationWizardDataViewModel';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsConfigurationWizardTreeViewModel = {
    parentQuestionId: Option<number>;
    parentRefId: Option<number>;
    questionId: Option<number>;
    questionRefId: Option<number>;
    questionCategoryId: Option<number>;
    questionAnswerId: Option<number>;
    checkListItemId: Option<string>;
    questionText: Option<string>;
    answer: Option<string>;
    answerValue: Option<string>;
    answerList: Option<Array<LELodasoftCommonModelsConfigurationWizardDataViewModel>>;
};
export declare const LELodasoftCommonModelsConfigurationWizardTreeViewModelIO: import("io-ts").TypeC<{
    parentQuestionId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    parentRefId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    questionId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    questionRefId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    questionCategoryId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    questionAnswerId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    checkListItemId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    questionText: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    answer: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    answerValue: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    answerList: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
        id: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        dataId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        value: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        name: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        buttonImage: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    }>>>;
}>;
