import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsSharedAddressView = {
    mailingStreet: Option<string>;
    mailingPOBox: Option<string>;
    mailingCity: Option<string>;
    mailingState: Option<string>;
    mailingZip: Option<string>;
};
export declare const LELodasoftApiModelsSharedAddressViewIO: import("io-ts").TypeC<{
    mailingStreet: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    mailingPOBox: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    mailingCity: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    mailingState: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    mailingZip: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
