"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsBorrowerApplicationViewModelIO = io_ts_1.type({
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    applicationId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    userId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    borrowerId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    refNumber: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    borrowerName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mailingStreet: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mailingCity: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mailingState: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mailingZip: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    loanAmount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    loanStatusId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    loanPurposeId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    dateCreated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftApiModelsBorrowerApplicationViewModel.js.map