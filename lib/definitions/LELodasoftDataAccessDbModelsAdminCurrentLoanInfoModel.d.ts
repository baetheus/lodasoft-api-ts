import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel = {
    currentLoanInfoId: Option<number>;
    applicationId: Option<number>;
    currentUnpaidPrincipalBalance: Option<number>;
    propertyValue: Option<number>;
    currentRate: Option<number>;
    term: Option<number>;
};
export declare const LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModelIO: import("io-ts").TypeC<{
    currentLoanInfoId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    applicationId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    currentUnpaidPrincipalBalance: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    propertyValue: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    currentRate: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    term: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
}>;
