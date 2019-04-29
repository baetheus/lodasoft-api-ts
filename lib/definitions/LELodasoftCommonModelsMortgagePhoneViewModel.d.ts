import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsMortgagePhoneViewModel = {
    phoneId: Option<number>;
    borrowerId: Option<number>;
    phoneNumber: Option<string>;
    typeOfPhone: Option<'HomePhone' | 'WorkPhone' | 'CellPhone'>;
    companyId: Option<number>;
    insertedBy: Option<string>;
    dateInserted: Option<Date>;
    updatedBy: Option<string>;
    dateUpdated: Option<Date>;
};
export declare const LELodasoftCommonModelsMortgagePhoneViewModelIO: import("io-ts").TypeC<{
    phoneId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    borrowerId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    phoneNumber: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    typeOfPhone: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        HomePhone: null;
        WorkPhone: null;
        CellPhone: null;
    }>>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
