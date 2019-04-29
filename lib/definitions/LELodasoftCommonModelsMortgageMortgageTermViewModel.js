"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsMortgageMortgageTermViewModelIO = io_ts_1.type({
    mortgageTermId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    mortgageAppliedFor: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ VA: null, FHA: null, Conventional: null, USDARuralHousingService: null, OtherMortgage: null })),
    agencyCaseNumber: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    lenderCaseNumber: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    amount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    appraisedValue: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    interestRate: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    noOfMonths: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    amortizationType: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ FixedRate: null, GEM: null, GPM: null, ARM: null, OtherAmortization: null })),
    lienPosition: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ FirstLien: null, SecondLien: null, Other: null })),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsMortgageMortgageTermViewModel.js.map