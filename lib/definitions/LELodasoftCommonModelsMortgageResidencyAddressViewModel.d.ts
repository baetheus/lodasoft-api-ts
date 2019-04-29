import { LELodasoftCommonModelsMortgageAddressViewModel } from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsMortgageResidencyAddressViewModel = {
    residencyAddressId: Option<number>;
    borrowerId: number;
    addressId: Option<number>;
    residencyBasis: 'PresentAddress' | 'FormerAddress' | 'MailingAddress';
    durationYears: Option<number>;
    durationMonths: Option<number>;
    ownRentType: Option<'Own' | 'Rent' | 'LivingRentFree'>;
    fromCreditReport: Option<boolean>;
    address: Option<LELodasoftCommonModelsMortgageAddressViewModel>;
    companyId: Option<number>;
    insertedBy: Option<string>;
    dateInserted: Option<Date>;
    updatedBy: Option<string>;
    dateUpdated: Option<Date>;
};
export declare const LELodasoftCommonModelsMortgageResidencyAddressViewModelIO: import("io-ts").TypeC<{
    residencyAddressId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    borrowerId: import("io-ts").NumberC;
    addressId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    residencyBasis: import("io-ts").KeyofC<{
        PresentAddress: null;
        FormerAddress: null;
        MailingAddress: null;
    }>;
    durationYears: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    durationMonths: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    ownRentType: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        Own: null;
        Rent: null;
        LivingRentFree: null;
    }>>;
    fromCreditReport: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    address: import("io-ts-types").OptionFromNullableC<import("io-ts").TypeC<{
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
    }>>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
