"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsLoanDocFileViewModel_1 = require("../definitions/LELodasoftCommonModelsLoanDocFileViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsLoanLoanDocViewModelIO = io_ts_1.type({
    loanDocId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    applicationId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    borrowerID: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    documentTypeId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    description: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    note: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    expirationDate: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    retask: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    active: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    docFiles: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsLoanDocFileViewModel_1.LELodasoftCommonModelsLoanDocFileViewModelIO)),
});
//# sourceMappingURL=LELodasoftCommonModelsLoanLoanDocViewModel.js.map