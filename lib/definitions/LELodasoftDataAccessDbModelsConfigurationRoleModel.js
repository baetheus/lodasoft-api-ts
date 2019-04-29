"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessDbModelsConfigurationRoleModelIO = io_ts_1.type({
    roleId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    roleName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    isLoanContact: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    order: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    allowAccessAllLoans: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    allowBorrowerAssignment: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    showOnPortals: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    showNewSubmissionForm: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    bulkEditTasks: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    readOnlyTasks: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    useForCreditMonitoring: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftDataAccessDbModelsConfigurationRoleModel.js.map