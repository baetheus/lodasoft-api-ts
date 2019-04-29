import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsSharedConfirmRegisterRequestModel = {
    userName: Option<string>;
    token: Option<string>;
};
export declare const LELodasoftCommonModelsSharedConfirmRegisterRequestModelIO: import("io-ts").TypeC<{
    userName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    token: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
