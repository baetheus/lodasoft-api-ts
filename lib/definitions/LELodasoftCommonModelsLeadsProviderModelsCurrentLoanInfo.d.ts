import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsLeadsProviderModelsCurrentLoanInfo = {
    unpaidPrincipalBalance: Option<number>;
    estimatedValue: Option<number>;
    interestRate: Option<number>;
    term: Option<number>;
};
export declare const LELodasoftCommonModelsLeadsProviderModelsCurrentLoanInfoIO: import("io-ts").TypeC<{
    unpaidPrincipalBalance: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    estimatedValue: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    interestRate: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    term: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
}>;
