import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsMessageSendSmsBetweenModel = {
    num1: Option<string>;
    num2: Option<string>;
};
export declare const LELodasoftCommonModelsMessageSendSmsBetweenModelIO: import("io-ts").TypeC<{
    num1: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    num2: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
