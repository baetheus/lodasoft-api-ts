import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModel = {
    mergeFieldId: Option<number>;
    mergeText: Option<string>;
    displayName: Option<string>;
    table: Option<string>;
    column: Option<string>;
    baseType: Option<string>;
};
export declare const LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModelIO: import("io-ts").TypeC<{
    mergeFieldId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    mergeText: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    displayName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    table: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    column: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    baseType: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
