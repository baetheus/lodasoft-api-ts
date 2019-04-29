import { LELodasoftCommonModelsSharedPortalTaskDocument } from '../definitions/LELodasoftCommonModelsSharedPortalTaskDocument';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsSharedPortalTaskModel = {
    taskId: Option<number>;
    taskTypeId: Option<string>;
    borrowerTaskType: Option<'RequestDocument' | 'ViewDocument' | 'AcknowledgeReceipt' | 'EsignDocument' | 'RequestInformation' | 'PerformAction' | 'OnlineApplication' | 'DigitalAssetVerification'>;
    description: Option<string>;
    docType: Option<string>;
    docSortOrder: Option<number>;
    submittedDate: Option<Date>;
    approvedDate: Option<Date>;
    dueDate: Option<Date>;
    templateDocumentUrl: Option<string>;
    borrowerId: Option<number>;
    borrowerName: Option<string>;
    borrowerFacingNote: Option<string>;
    borrowerTaskStatus: Option<'Pending' | 'Submitted' | 'Rejected' | 'Completed'>;
    linkedDocuments: Option<Array<LELodasoftCommonModelsSharedPortalTaskDocument>>;
    allowUpload: Option<boolean>;
};
export declare const LELodasoftCommonModelsSharedPortalTaskModelIO: import("io-ts").TypeC<{
    taskId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    taskTypeId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    borrowerTaskType: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        RequestDocument: null;
        ViewDocument: null;
        AcknowledgeReceipt: null;
        EsignDocument: null;
        RequestInformation: null;
        PerformAction: null;
        OnlineApplication: null;
        DigitalAssetVerification: null;
    }>>;
    description: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    docType: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    docSortOrder: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    submittedDate: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    approvedDate: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    dueDate: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    templateDocumentUrl: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    borrowerId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    borrowerName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    borrowerFacingNote: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    borrowerTaskStatus: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        Pending: null;
        Submitted: null;
        Rejected: null;
        Completed: null;
    }>>;
    linkedDocuments: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
        documentGuid: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        documentUrl: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        fileName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        borrowerNote: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    }>>>;
    allowUpload: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
}>;
