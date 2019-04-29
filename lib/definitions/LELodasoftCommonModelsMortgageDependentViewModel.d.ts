import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsMortgageDependentViewModel = {
    dependentId: Option<number>;
    borrowerId: Option<number>;
    age: Option<number>;
    companyId: Option<number>;
    insertedBy: Option<string>;
    dateInserted: Option<Date>;
    updatedBy: Option<string>;
    dateUpdated: Option<Date>;
};
export declare const LELodasoftCommonModelsMortgageDependentViewModelIO: import("io-ts").TypeC<{
    dependentId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    borrowerId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    age: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
