import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiControllersInitializeFormFreeRequest = {
    firstName: Option<string>;
    lastName: Option<string>;
    email: Option<string>;
    last4Ssn: Option<string>;
    maxHeight: Option<number>;
    maxWidth: Option<number>;
};
export declare const LELodasoftApiControllersInitializeFormFreeRequestIO: import("io-ts").TypeC<{
    firstName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    lastName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    email: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    last4Ssn: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    maxHeight: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    maxWidth: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
}>;
