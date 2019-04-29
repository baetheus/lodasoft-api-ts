import { Option } from 'fp-ts/lib/Option';
export declare type MicrosoftAspNetIdentityEntityFrameworkIdentityUserClaim = {
    id: Option<number>;
    userId: Option<string>;
    claimType: Option<string>;
    claimValue: Option<string>;
};
export declare const MicrosoftAspNetIdentityEntityFrameworkIdentityUserClaimIO: import("io-ts").TypeC<{
    id: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    userId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    claimType: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    claimValue: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
