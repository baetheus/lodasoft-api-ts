import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsPublicApiUserViewModel = {
    userId: Option<string>;
    avatar: Option<string>;
    firstName: Option<string>;
    lastName: Option<string>;
};
export declare const LELodasoftCommonModelsPublicApiUserViewModelIO: import("io-ts").TypeC<{
    userId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    avatar: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    firstName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    lastName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
