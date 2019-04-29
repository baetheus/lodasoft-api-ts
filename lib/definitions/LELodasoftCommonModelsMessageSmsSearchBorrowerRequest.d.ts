import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsMessageSmsSearchBorrowerRequest = {
    phone: Option<string>;
};
export declare const LELodasoftCommonModelsMessageSmsSearchBorrowerRequestIO: import("io-ts").TypeC<{
    phone: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
