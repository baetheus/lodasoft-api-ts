import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel = {
    employementInfoId: Option<number>;
    companyName: Option<string>;
    position: Option<string>;
    years: Option<number>;
    months: Option<number>;
    monthlyIncome: Option<number>;
    borrowerId: Option<number>;
    current: Option<boolean>;
};
export declare const LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModelIO: import("io-ts").TypeC<{
    employementInfoId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    companyName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    position: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    years: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    months: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    monthlyIncome: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    borrowerId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    current: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
}>;
