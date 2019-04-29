import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsConfigurationWizardGroupViewModel = {
    id: Option<number>;
    groupId: Option<number>;
    questionId: Option<number>;
    categoryId: Option<number>;
    name: Option<string>;
    question: Option<string>;
    answer: Option<string>;
    validate: Option<string>;
};
export declare const LELodasoftCommonModelsConfigurationWizardGroupViewModelIO: import("io-ts").TypeC<{
    id: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    groupId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    questionId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    categoryId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    name: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    question: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    answer: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    validate: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
