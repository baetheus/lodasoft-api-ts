import { LELodasoftDataAccessDbModelsAdminDocFileModel } from '../definitions/LELodasoftDataAccessDbModelsAdminDocFileModel';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftDataAccessDbModelsAdminLoanDocModel = {
    loanDocId: Option<number>;
    applicationId: Option<number>;
    borrowerID: Option<number>;
    documentTypeId: Option<number>;
    description: Option<string>;
    note: Option<string>;
    expirationDate: Option<Date>;
    retask: Option<boolean>;
    active: Option<boolean>;
    docFiles: Option<Array<LELodasoftDataAccessDbModelsAdminDocFileModel>>;
};
export declare const LELodasoftDataAccessDbModelsAdminLoanDocModelIO: import("io-ts").TypeC<{
    loanDocId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    applicationId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    borrowerID: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    documentTypeId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    description: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    note: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    expirationDate: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    retask: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    active: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    docFiles: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
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
    }>>>;
}>;
