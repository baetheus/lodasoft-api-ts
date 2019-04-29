import { Option } from 'fp-ts/lib/Option';
export declare type MicrosoftAspNetIdentityEntityFrameworkIdentityUserRole = {
    userId: Option<string>;
    roleId: Option<string>;
};
export declare const MicrosoftAspNetIdentityEntityFrameworkIdentityUserRoleIO: import("io-ts").TypeC<{
    userId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    roleId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
