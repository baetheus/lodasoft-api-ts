import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftDataAccessDbModelsConfigurationConfigurationModel = {
    id: Option<number>;
    key: Option<string>;
    value: Option<number>;
    valueStr: Option<string>;
    companyId: Option<number>;
    insertedBy: Option<string>;
    dateInserted: Option<Date>;
    updatedBy: Option<string>;
    dateUpdated: Option<Date>;
};
export declare const LELodasoftDataAccessDbModelsConfigurationConfigurationModelIO: import("io-ts").TypeC<{
    id: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    key: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    value: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    valueStr: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
