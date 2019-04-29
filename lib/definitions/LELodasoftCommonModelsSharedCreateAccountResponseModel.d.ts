import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsSharedCreateAccountResponseModel = {
    userId: Option<string>;
    success: Option<boolean>;
    alreadyRegistered: Option<boolean>;
    errorMessage: Option<string>;
};
export declare const LELodasoftCommonModelsSharedCreateAccountResponseModelIO: import("io-ts").TypeC<{
    userId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    success: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    alreadyRegistered: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    errorMessage: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
