import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsChangePasswordBindingModel = {
    oldPassword: string;
    newPassword: string;
    confirmPassword: Option<string>;
};
export declare const LELodasoftApiModelsChangePasswordBindingModelIO: import("io-ts").TypeC<{
    oldPassword: import("io-ts").StringC;
    newPassword: import("io-ts").StringC;
    confirmPassword: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
