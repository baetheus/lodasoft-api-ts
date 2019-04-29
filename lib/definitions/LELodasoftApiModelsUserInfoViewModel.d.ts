import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsUserInfoViewModel = {
    userName: Option<string>;
    hasRegistered: Option<boolean>;
    loginProvider: Option<string>;
    emailAddress: Option<string>;
};
export declare const LELodasoftApiModelsUserInfoViewModelIO: import("io-ts").TypeC<{
    userName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    hasRegistered: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    loginProvider: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    emailAddress: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
