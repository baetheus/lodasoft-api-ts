import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiControllersAdminControllerCheckRegisterModel = {
    username: Option<string>;
    token: Option<string>;
};
export declare const LELodasoftApiControllersAdminControllerCheckRegisterModelIO: import("io-ts").TypeC<{
    username: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    token: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
