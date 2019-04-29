import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsSharedGeneratePrequalLetterRequest = {
    productDescription: Option<string>;
    address: Option<string>;
    city: Option<string>;
    state: Option<string>;
    zip: Option<string>;
    loanAmount: Option<number>;
    purchasePrice: Option<number>;
    downPayment: Option<number>;
    interestRate: Option<number>;
};
export declare const LELodasoftCommonModelsSharedGeneratePrequalLetterRequestIO: import("io-ts").TypeC<{
    productDescription: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    address: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    city: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    state: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    zip: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    loanAmount: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    purchasePrice: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    downPayment: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    interestRate: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
}>;
