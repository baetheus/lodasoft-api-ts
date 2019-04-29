import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsAdminNotificationViewModel = {
    head: Option<string>;
    body: Option<string>;
};
export declare const LELodasoftCommonModelsAdminNotificationViewModelIO: import("io-ts").TypeC<{
    head: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    body: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
