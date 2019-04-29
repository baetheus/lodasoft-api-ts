"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModelIO = io_ts_1.type({
    currentLoanInfoId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    applicationId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    currentUnpaidPrincipalBalance: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    propertyValue: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    currentRate: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    term: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
});
//# sourceMappingURL=LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel.js.map