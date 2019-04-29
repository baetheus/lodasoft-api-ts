"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsMortgageAddressViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageAddressViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsMortgageLiabilityViewModelIO = io_ts_1.type({
    liabilityId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    borrowerId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    addressId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    typeOfLiability: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({
        Alimony: null,
        ChildCare: null,
        ChildSupport: null,
        CollectionsJudgementsAndLiens: null,
        HELOC: null,
        Installment: null,
        JobRelatedExpenses: null,
        LeasePayments: null,
        MortgageLoan: null,
        Open30DayChargeAccount: null,
        OtherLiability: null,
        Revolving: null,
        SeparateMaintenanceExpense: null,
        OtherExpense: null,
        Taxes: null,
    })),
    creditorName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    accountNumber: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    monthlyPayment: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    monthsLeftToPay: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    unpaidBalance: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    willBePaidOff: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    isResubordinate: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    isExcluded: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    late30Days: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    late60Days: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    late90Days: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    late120Days: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    consumerDisputeIndicator: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    derogatoryDataIndicator: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    fromCreditReport: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    address: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsMortgageAddressViewModel_1.LELodasoftCommonModelsMortgageAddressViewModelIO),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsMortgageLiabilityViewModel.js.map