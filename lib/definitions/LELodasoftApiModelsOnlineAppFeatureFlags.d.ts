import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsOnlineAppFeatureFlags = {
    voaEnabled: Option<boolean>;
    creditPullEnabled: Option<boolean>;
    duEnabled: Option<boolean>;
    lpaEnabled: Option<boolean>;
};
export declare const LELodasoftApiModelsOnlineAppFeatureFlagsIO: import("io-ts").TypeC<{
    voaEnabled: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    creditPullEnabled: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    duEnabled: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    lpaEnabled: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
}>;
