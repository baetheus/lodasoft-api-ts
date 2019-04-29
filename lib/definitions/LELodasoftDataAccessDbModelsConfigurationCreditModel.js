"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessDbModelsConfigurationCreditModelIO = io_ts_1.type({
    creditID: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    refNumber: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    date: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    equifax: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    experian: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    transUnion: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    joint: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    borrowerId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    applicationId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    integrationHistoryId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftDataAccessDbModelsConfigurationCreditModel.js.map