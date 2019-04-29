"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO = io_ts_1.type({
    purchaseCreditId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    transactionDetailId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    purchaseCreditType: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({
        BridgeLoan: null,
        CashOnHand: null,
        CheckingSavings: null,
        DepositOnSalesContract: null,
        EquityOnPendingSale: null,
        EquityOnSoldProperty: null,
        EquityOnSubjectProperty: null,
        GiftFunds: null,
        LifeInsuranceCashValue: null,
        LotEquity: null,
        OtherTypeOfDownPayment: null,
        RentWithOptionToPurchase: null,
        RetirementFunds: null,
        SaleOfChattel: null,
        SecuredBorrowedFunds: null,
        StocksAndBonds: null,
        SweatEquity: null,
        TradeEquity: null,
        TrustFunds: null,
        UnsecuredBorrowedFunds: null,
        EarnestMoney: null,
        RelocationFunds: null,
        EmployerAssistedHousing: null,
        LeasePurchaseFund: null,
        Other: null,
        LenderCredit: null,
    })),
    purchaseCreditAmount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsMortgagePurchaseCreditViewModel.js.map