import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftDataAccessDbModelsAdminLookupTypeModel = {
    id: Option<number>;
    lookupTypeID: Option<number>;
    lookupGroup: Option<string>;
    lookupValue: Option<string>;
    lookupDescription: Option<string>;
    lookupOrder: Option<number>;
};
export declare const LELodasoftDataAccessDbModelsAdminLookupTypeModelIO: import("io-ts").TypeC<{
    id: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    lookupTypeID: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    lookupGroup: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    lookupValue: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    lookupDescription: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    lookupOrder: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
}>;
