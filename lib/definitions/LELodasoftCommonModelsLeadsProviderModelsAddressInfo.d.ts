import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsLeadsProviderModelsAddressInfo = {
    address1: Option<string>;
    address2: Option<string>;
    city: Option<string>;
    state: Option<string>;
    zip: Option<string>;
};
export declare const LELodasoftCommonModelsLeadsProviderModelsAddressInfoIO: import("io-ts").TypeC<{
    address1: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    address2: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    city: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    state: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    zip: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
