import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsConfigurationWizardDataViewModel = {
    id: Option<number>;
    dataId: Option<number>;
    value: Option<string>;
    name: Option<string>;
    buttonImage: Option<string>;
};
export declare const LELodasoftCommonModelsConfigurationWizardDataViewModelIO: import("io-ts").TypeC<{
    id: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    dataId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    value: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    name: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    buttonImage: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
