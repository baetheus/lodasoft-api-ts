import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftDataAccessModelsAdminBorrowerFileDto = {
    guid: Option<string>;
    loanDocId: Option<number>;
    fileName: Option<string>;
    note: Option<string>;
    borrowerNote: Option<string>;
    condition: Option<boolean>;
    createDate: Option<Date>;
    expirationDate: Option<Date>;
    active: Option<boolean>;
};
export declare const LELodasoftDataAccessModelsAdminBorrowerFileDtoIO: import("io-ts").TypeC<{
    guid: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    loanDocId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    fileName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    note: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    borrowerNote: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    condition: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    createDate: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    expirationDate: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    active: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
}>;
