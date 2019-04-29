"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftDataAccessDbModelsConfigurationRoleModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationRoleModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO = io_ts_1.type({
    loanStatusId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    loanStatusName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    selectByRole: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    order: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    showAsArchive: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    hideFromCounter: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    isLeadStatus: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    emailFromRoleId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    roleModel: io_ts_types_1.createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationRoleModel_1.LELodasoftDataAccessDbModelsConfigurationRoleModelIO),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftDataAccessDbModelsConfigurationLoanStatusModel.js.map