import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsRegisterBindingModel = {
    email: string;
    password: string;
    confirmPassword: Option<string>;
};
export declare const LELodasoftApiModelsRegisterBindingModelIO: import("io-ts").TypeC<{
    email: import("io-ts").StringC;
    password: import("io-ts").StringC;
    confirmPassword: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
