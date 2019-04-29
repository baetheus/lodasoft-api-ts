import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsUserUserLookupView = {
    id: Option<string>;
    firstName: Option<string>;
    lastName: Option<string>;
    roleId: Option<number>;
};
export declare const LELodasoftApiModelsUserUserLookupViewIO: import("io-ts").TypeC<{
    id: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    firstName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    lastName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    roleId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
}>;
