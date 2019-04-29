"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsLoanDocFileViewModelIO = io_ts_1.type({
    guid: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    loanDocId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    applicationId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    borrowerId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    documentTypeId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    note: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    borrowerNote: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    condition: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    fileName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mimeType: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    fileData: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    createDate: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    exportDate: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    active: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
});
//# sourceMappingURL=LELodasoftCommonModelsLoanDocFileViewModel.js.map