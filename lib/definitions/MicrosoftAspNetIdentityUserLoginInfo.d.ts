import { Option } from 'fp-ts/lib/Option';
export declare type MicrosoftAspNetIdentityUserLoginInfo = {
    loginProvider: Option<string>;
    providerKey: Option<string>;
};
export declare const MicrosoftAspNetIdentityUserLoginInfoIO: import("io-ts").TypeC<{
    loginProvider: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    providerKey: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
