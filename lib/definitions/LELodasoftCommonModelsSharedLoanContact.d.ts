import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsSharedLoanContact = {
    userId: Option<string>;
    name: Option<string>;
    title: Option<string>;
    phone: Option<string>;
    email: Option<string>;
    avatarUrl: Option<string>;
    order: Option<number>;
};
export declare const LELodasoftCommonModelsSharedLoanContactIO: import("io-ts").TypeC<{
    userId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    name: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    title: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    phone: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    email: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    avatarUrl: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    order: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
}>;
