import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsSharedCreateAccountModel = {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    confirmPassword: Option<string>;
};
export declare const LELodasoftCommonModelsSharedCreateAccountModelIO: import("io-ts").TypeC<{
    firstName: import("io-ts").StringC;
    lastName: import("io-ts").StringC;
    userName: import("io-ts").StringC;
    password: import("io-ts").StringC;
    confirmPassword: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
