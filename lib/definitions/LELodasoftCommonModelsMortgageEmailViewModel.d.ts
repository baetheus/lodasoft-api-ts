import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsMortgageEmailViewModel = {
    emailId: Option<number>;
    borrowerId: Option<number>;
    emailAddress: Option<string>;
    typeOfEmail: Option<'PrimaryEmail' | 'AdditionalEmail'>;
    companyId: Option<number>;
    insertedBy: Option<string>;
    dateInserted: Option<Date>;
    updatedBy: Option<string>;
    dateUpdated: Option<Date>;
};
export declare const LELodasoftCommonModelsMortgageEmailViewModelIO: import("io-ts").TypeC<{
    emailId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    borrowerId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    emailAddress: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    typeOfEmail: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        PrimaryEmail: null;
        AdditionalEmail: null;
    }>>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
