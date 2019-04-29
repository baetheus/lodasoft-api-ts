"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsMortgageAddressViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageAddressViewModel");
var LELodasoftCommonModelsMortgageIncomeViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageIncomeViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsMortgageEmploymentViewModelIO = io_ts_1.type({
    employmentId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    borrowerId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    addressId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    employer: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    employerEmail: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    employerPhone: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    employmentType: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ CurrentEmployer: null, FormerEmployer: null })),
    selfEmployed: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    isPrimary: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    position: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    startDate: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    endDate: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    yearsOnJob: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    monthsOnJob: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    yearsInLineOfWork: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    fromCreditReport: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    address: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsMortgageAddressViewModel_1.LELodasoftCommonModelsMortgageAddressViewModelIO),
    incomes: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsMortgageIncomeViewModel_1.LELodasoftCommonModelsMortgageIncomeViewModelIO)),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsMortgageEmploymentViewModel.js.map