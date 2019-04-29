import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsMortgageAddressViewModel = {
    addressId: Option<number>;
    typeOfAddress: Option<'PresentAddress' | 'FormerAddress' | 'MailingAddress'>;
    address1: Option<string>;
    city: Option<string>;
    state: Option<string>;
    zipCode: Option<string>;
    country: Option<string>;
    active: Option<boolean>;
    companyId: Option<number>;
    insertedBy: Option<string>;
    dateInserted: Option<Date>;
    updatedBy: Option<string>;
    dateUpdated: Option<Date>;
};
export declare const LELodasoftCommonModelsMortgageAddressViewModelIO: import("io-ts").TypeC<{
    addressId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    typeOfAddress: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        PresentAddress: null;
        FormerAddress: null;
        MailingAddress: null;
    }>>;
    address1: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    city: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    state: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    zipCode: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    country: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    active: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
