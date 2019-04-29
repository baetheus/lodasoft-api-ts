"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsLeadsProviderModelsCurrentLoanInfoIO = io_ts_1.type({
    unpaidPrincipalBalance: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    estimatedValue: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    interestRate: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    term: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
});
//# sourceMappingURL=LELodasoftCommonModelsLeadsProviderModelsCurrentLoanInfo.js.map