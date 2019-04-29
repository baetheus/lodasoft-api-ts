import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsExternalLoginViewModel = {
    name: Option<string>;
    url: Option<string>;
    state: Option<string>;
};
export declare const LELodasoftApiModelsExternalLoginViewModelIO: import("io-ts").TypeC<{
    name: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    url: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    state: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
