import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse = {
    success: Option<boolean>;
    htmlWidgetSrc: Option<string>;
    errorMessage: Option<string>;
};
export declare const LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponseIO: import("io-ts").TypeC<{
    success: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    htmlWidgetSrc: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    errorMessage: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
