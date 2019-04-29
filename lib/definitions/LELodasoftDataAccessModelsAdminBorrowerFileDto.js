"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessModelsAdminBorrowerFileDtoIO = io_ts_1.type({
    guid: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    loanDocId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    fileName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    note: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    borrowerNote: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    condition: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    createDate: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    expirationDate: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    active: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
});
//# sourceMappingURL=LELodasoftDataAccessModelsAdminBorrowerFileDto.js.map