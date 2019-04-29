import { Option } from 'fp-ts/lib/Option';
export declare type MicrosoftAspNetIdentityEntityFrameworkIdentityUserLogin = {
    loginProvider: Option<string>;
    providerKey: Option<string>;
    userId: Option<string>;
};
export declare const MicrosoftAspNetIdentityEntityFrameworkIdentityUserLoginIO: import("io-ts").TypeC<{
    loginProvider: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    providerKey: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    userId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
