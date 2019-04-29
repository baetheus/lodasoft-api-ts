import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsSharedRegisterModel = {
    token: Option<string>;
    isConfirmed: Option<boolean>;
    userName: string;
    password: string;
    confirmPassword: Option<string>;
};
export declare const LELodasoftCommonModelsSharedRegisterModelIO: import("io-ts").TypeC<{
    token: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    isConfirmed: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    userName: import("io-ts").StringC;
    password: import("io-ts").StringC;
    confirmPassword: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
