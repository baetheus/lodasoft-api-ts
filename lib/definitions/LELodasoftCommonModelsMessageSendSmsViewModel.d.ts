import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsMessageSendSmsViewModel = {
    from: Option<string>;
    to: Option<string>;
    body: Option<string>;
};
export declare const LELodasoftCommonModelsMessageSendSmsViewModelIO: import("io-ts").TypeC<{
    from: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    to: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    body: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
