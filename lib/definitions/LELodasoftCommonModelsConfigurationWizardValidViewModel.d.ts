import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsConfigurationWizardValidViewModel = {
    id: Option<number>;
    questionId: Option<number>;
    min: Option<number>;
    max: Option<number>;
    required: Option<boolean>;
};
export declare const LELodasoftCommonModelsConfigurationWizardValidViewModelIO: import("io-ts").TypeC<{
    id: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    questionId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    min: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    max: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    required: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
}>;
