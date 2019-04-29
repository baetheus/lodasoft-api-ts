"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsMortgagePurchaseCreditViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgagePurchaseCreditViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsMortgageTransactionDetailViewModelIO = io_ts_1.type({
    transactionDetailId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    purchasePriceAmount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    landAmount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    alterationsImprovementsAndRepairsAmount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    refinanceIncludingDebtsToBePaidOffAmount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    prepaidItemsEstimatedAmount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    estimatedClosingCostsAmount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    miAndFundingFeeTotalAmount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    borrowerPaidDiscountPointsTotalAmount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    subordinateLienAmount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    sellerPaidClosingCostsAmount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    miAndFundingFeeFinancedAmount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    purchaseCredits: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsMortgagePurchaseCreditViewModel_1.LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO)),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsMortgageTransactionDetailViewModel.js.map