import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsLoginBindingModel = {
    email: string;
    password: string;
    rememberMe: Option<boolean>;
    scope: Option<string>;
};
export declare const LELodasoftApiModelsLoginBindingModelIO: import("io-ts").TypeC<{
    email: import("io-ts").StringC;
    password: import("io-ts").StringC;
    rememberMe: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    scope: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
