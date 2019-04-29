import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftThirdPartyLosSearchResponseItem = {
    losIdentifier: Option<string>;
    loanNumber: Option<string>;
    borrowerFirstName: Option<string>;
    borrowerLastName: Option<string>;
    subjectPropertyAddress: Option<string>;
    subjectPropertyCity: Option<string>;
    subjectPropertyState: Option<string>;
    subjectPropertyZip: Option<string>;
};
export declare const LELodasoftThirdPartyLosSearchResponseItemIO: import("io-ts").TypeC<{
    losIdentifier: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    loanNumber: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    borrowerFirstName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    borrowerLastName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    subjectPropertyAddress: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    subjectPropertyCity: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    subjectPropertyState: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    subjectPropertyZip: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
