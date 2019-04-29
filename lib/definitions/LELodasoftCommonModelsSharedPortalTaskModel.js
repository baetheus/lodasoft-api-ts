"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsSharedPortalTaskDocument_1 = require("../definitions/LELodasoftCommonModelsSharedPortalTaskDocument");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsSharedPortalTaskModelIO = io_ts_1.type({
    taskId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    taskTypeId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    borrowerTaskType: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({
        RequestDocument: null,
        ViewDocument: null,
        AcknowledgeReceipt: null,
        EsignDocument: null,
        RequestInformation: null,
        PerformAction: null,
        OnlineApplication: null,
        DigitalAssetVerification: null,
    })),
    description: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    docType: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    docSortOrder: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    submittedDate: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    approvedDate: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    dueDate: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    templateDocumentUrl: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    borrowerId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    borrowerName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    borrowerFacingNote: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    borrowerTaskStatus: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ Pending: null, Submitted: null, Rejected: null, Completed: null })),
    linkedDocuments: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsSharedPortalTaskDocument_1.LELodasoftCommonModelsSharedPortalTaskDocumentIO)),
    allowUpload: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
});
//# sourceMappingURL=LELodasoftCommonModelsSharedPortalTaskModel.js.map