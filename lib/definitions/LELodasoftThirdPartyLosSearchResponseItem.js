"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftThirdPartyLosSearchResponseItemIO = io_ts_1.type({
    losIdentifier: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    loanNumber: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    borrowerFirstName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    borrowerLastName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    subjectPropertyAddress: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    subjectPropertyCity: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    subjectPropertyState: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    subjectPropertyZip: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftThirdPartyLosSearchResponseItem.js.map