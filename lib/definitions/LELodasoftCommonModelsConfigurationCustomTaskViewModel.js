"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsConfigurationCustomTaskViewModelIO = io_ts_1.type({
    customTaskId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    taskCategoryId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    loanStatusId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    taskDescription: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    option: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ Immediately: null, OnLoanStatus: null })),
    applyTo: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ Loan: null, PrimaryBorrower: null, SelectBorrowers: null })),
    roleId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    documentTypeId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    reviewRequiredRoleId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    notifyPartyRoleId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    taskType: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({
        RequestDocument: null,
        ViewDocument: null,
        AcknowledgeReceipt: null,
        EsignDocument: null,
        RequestInformation: null,
        PerformAction: null,
        OnlineApplication: null,
        DigitalAssetVerification: null,
    })),
    defaultTaskPriority: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ Low: null, Normal: null, High: null, Immediate: null })),
    dueDays: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    permittedAgentTypes: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    tasksOnCompletion: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    documentDataHeader: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    documentData: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    docDataString: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    requestBorrower: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    alwaysShowPending: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsConfigurationCustomTaskViewModel.js.map