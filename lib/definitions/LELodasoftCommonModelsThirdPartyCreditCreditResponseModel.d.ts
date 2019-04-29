import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsThirdPartyCreditCreditResponseModel = {
    success: Option<boolean>;
    validationErrors: Option<Array<string>>;
    errorMessage: Option<string>;
};
export declare const LELodasoftCommonModelsThirdPartyCreditCreditResponseModelIO: import("io-ts").TypeC<{
    success: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    validationErrors: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").StringC>>;
    errorMessage: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
