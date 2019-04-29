import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsAdminTrackingUserViewModel = {
    id: Option<string>;
    userName: Option<string>;
    firstName: Option<string>;
    lastName: Option<string>;
};
export declare const LELodasoftCommonModelsAdminTrackingUserViewModelIO: import("io-ts").TypeC<{
    id: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    userName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    firstName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    lastName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
