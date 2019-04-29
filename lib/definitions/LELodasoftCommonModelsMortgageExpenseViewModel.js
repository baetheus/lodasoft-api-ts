"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsMortgageExpenseViewModelIO = io_ts_1.type({
    expenseId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    borrowerId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    monthlyAmount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    expenseType: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({
        FirstMortgagePrincipalAndInterest: null,
        HazardInsurance: null,
        HomeownersInsurance: null,
        HomeownersAssociationDuesAndCondominiumFees: null,
        MorgageInsurance: null,
        OtherHousingExpense: null,
        OtherMortgageLoanPrincipalAndInterest: null,
        RealEstateTax: null,
        Rent: null,
    })),
    isCurrent: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsMortgageExpenseViewModel.js.map