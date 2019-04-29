"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactLoanQuoteIO = io_ts_1.type({
    rate: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    apr: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    termMonths: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    dueInMonths: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    interestOnlyMonths: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    lockDays: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    hasPrepaymentPenalty: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    jumbo: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    harp: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    lenderPaidMortgageInsurance: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    annualMortgageInsurancePercent: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    currentBackerMustBeFannieMae: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    currentBackerMustBeFreddieMac: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    lenderCredit: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    lenderCreditPercent: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    maxAllowedLTV: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
});
//# sourceMappingURL=LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactLoanQuote.js.map