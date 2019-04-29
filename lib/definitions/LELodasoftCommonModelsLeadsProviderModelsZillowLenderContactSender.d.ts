import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactSender = {
    emailAddress: Option<string>;
    firstName: Option<string>;
    lastName: Option<string>;
    phoneNumber: Option<string>;
};
export declare const LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactSenderIO: import("io-ts").TypeC<{
    emailAddress: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    firstName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    lastName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    phoneNumber: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
