import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsAdminRecentApplicationView = {
    borrowerId: Option<number>;
    applicationId: Option<number>;
    displayText: Option<string>;
};
export declare const LELodasoftCommonModelsAdminRecentApplicationViewIO: import("io-ts").TypeC<{
    borrowerId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    applicationId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    displayText: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
