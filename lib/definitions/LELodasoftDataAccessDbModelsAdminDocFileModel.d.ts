import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftDataAccessDbModelsAdminDocFileModel = {
    guid: Option<string>;
    loanDocId: Option<number>;
    note: Option<string>;
    borrowerNote: Option<string>;
    condition: Option<boolean>;
    replacementValuesJson: Option<string>;
    fileName: Option<string>;
    mimeType: Option<string>;
    fileData: Option<string>;
    createDate: Option<Date>;
    exportDate: Option<Date>;
    active: Option<boolean>;
};
export declare const LELodasoftDataAccessDbModelsAdminDocFileModelIO: import("io-ts").TypeC<{
    guid: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    loanDocId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    note: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    borrowerNote: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    condition: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    replacementValuesJson: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    fileName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    mimeType: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    fileData: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    createDate: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    exportDate: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    active: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
}>;
