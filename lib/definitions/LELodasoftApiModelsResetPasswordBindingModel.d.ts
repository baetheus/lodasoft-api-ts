import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsResetPasswordBindingModel = {
    email: string;
    password: string;
    confirmPassword: Option<string>;
    code: Option<string>;
};
export declare const LELodasoftApiModelsResetPasswordBindingModelIO: import("io-ts").TypeC<{
    email: import("io-ts").StringC;
    password: import("io-ts").StringC;
    confirmPassword: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    code: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
