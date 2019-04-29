import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftDataAccessDbModelsConfigurationQATaskModel = {
    qaTaskId: Option<number>;
    taskName: Option<string>;
    roleId: Option<number>;
    documentTypeId: Option<number>;
    dueDays: Option<number>;
    borrowerTrigger: Option<number>;
    companyId: Option<number>;
    requestBorrower: Option<boolean>;
};
export declare const LELodasoftDataAccessDbModelsConfigurationQATaskModelIO: import("io-ts").TypeC<{
    qaTaskId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    taskName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    roleId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    documentTypeId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    dueDays: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    borrowerTrigger: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    requestBorrower: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
}>;
