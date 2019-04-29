"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftDataAccessModelsAdminBorrowerFileDto_1 = require("../definitions/LELodasoftDataAccessModelsAdminBorrowerFileDto");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsBorrowerLoanDocDtoIO = io_ts_1.type({
    loanDocId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    description: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    documentTypeId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    applicationId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    dateView: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    dateDownload: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    dateCreate: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    expirationDate: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    fileName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    note: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    condition: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    borrowerID: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    userId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    active: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    uploadFiles: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftDataAccessModelsAdminBorrowerFileDto_1.LELodasoftDataAccessModelsAdminBorrowerFileDtoIO)),
});
//# sourceMappingURL=LELodasoftApiModelsBorrowerLoanDocDto.js.map