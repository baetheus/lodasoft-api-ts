import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsVerifyCodeModel = {
    code: Option<string>;
    email: Option<string>;
    password: Option<string>;
};
export declare const LELodasoftApiModelsVerifyCodeModelIO: import("io-ts").TypeC<{
    code: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    email: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    password: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
