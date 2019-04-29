import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactRecipient = {
    lenderId: Option<string>;
    firstName: Option<string>;
    lastName: Option<string>;
    emailAddress: Option<string>;
    phoneNumber: Option<string>;
    nmlsLicense: Option<string>;
};
export declare const LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactRecipientIO: import("io-ts").TypeC<{
    lenderId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    firstName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    lastName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    emailAddress: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    phoneNumber: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    nmlsLicense: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
