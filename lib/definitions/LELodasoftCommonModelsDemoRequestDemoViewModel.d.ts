import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsDemoRequestDemoViewModel = {
    name: Option<string>;
    phone: Option<string>;
    email: Option<string>;
    subject: Option<string>;
    message: Option<string>;
};
export declare const LELodasoftCommonModelsDemoRequestDemoViewModelIO: import("io-ts").TypeC<{
    name: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    phone: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    email: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    subject: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    message: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
