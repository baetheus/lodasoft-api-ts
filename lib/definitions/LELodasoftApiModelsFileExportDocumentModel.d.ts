import { LELodasoftApiModelsFileExportLoanDocModel } from '../definitions/LELodasoftApiModelsFileExportLoanDocModel';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsFileExportDocumentModel = {
    documentTypeId: Option<number>;
    documentTypeName: Option<string>;
    docFiles: Option<Array<LELodasoftApiModelsFileExportLoanDocModel>>;
};
export declare const LELodasoftApiModelsFileExportDocumentModelIO: import("io-ts").TypeC<{
    documentTypeId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    documentTypeName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    docFiles: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
        taskStatus: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
            Pending: null;
            Submitted: null;
            Rejected: null;
            Approved: null;
            NotApplicable: null;
            Requested: null;
            Completed: null;
            ReviewReady: null;
        }>>;
        conditionStatus: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
            ConditionPending: null;
            ConditionCleared: null;
            ConditionReOpened: null;
        }>>;
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
