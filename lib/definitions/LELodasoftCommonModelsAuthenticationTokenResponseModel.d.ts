import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsAuthenticationTokenResponseModel = {
    access_token: Option<string>;
    token_type: Option<string>;
    expires_in: Option<number>;
    userName: Option<string>;
    issued: Option<string>;
    expires: Option<string>;
};
export declare const LELodasoftCommonModelsAuthenticationTokenResponseModelIO: import("io-ts").TypeC<{
    access_token: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    token_type: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    expires_in: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    userName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    issued: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    expires: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
