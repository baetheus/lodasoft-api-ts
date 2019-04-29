"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModelIO = io_ts_1.type({
    formFreeHistoryId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    firstName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    lastName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    email: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    last4Ssn: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    voaRequestType: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ full: null, lite: null })),
    transactionId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    accountChekOrderId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    reportId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    orderStatus: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    loginUrl: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    status: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    leadId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    applicationId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    borrowerId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    loanDocTaskId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    taskStatus: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({
        Pending: null,
        Submitted: null,
        Rejected: null,
        Approved: null,
        NotApplicable: null,
        Requested: null,
        Completed: null,
        ReviewReady: null,
    })),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModel.js.map