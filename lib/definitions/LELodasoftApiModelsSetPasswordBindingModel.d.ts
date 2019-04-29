import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsSetPasswordBindingModel = {
    newPassword: string;
    confirmPassword: Option<string>;
};
export declare const LELodasoftApiModelsSetPasswordBindingModelIO: import("io-ts").TypeC<{
    newPassword: import("io-ts").StringC;
    confirmPassword: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
