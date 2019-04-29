import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsZipcodeLookupResult = {
    recordNumber: Option<number>;
    zipcode: Option<string>;
    city: Option<string>;
    state: Option<string>;
    locationText: Option<string>;
};
export declare const LELodasoftApiModelsZipcodeLookupResultIO: import("io-ts").TypeC<{
    recordNumber: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    zipcode: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    city: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    state: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    locationText: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
