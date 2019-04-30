import {
	LELodasoftCommonModelsMortgagePurchaseCreditViewModel,
	LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgagePurchaseCreditViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, array, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsMortgageTransactionDetailViewModel = {
	transactionDetailId: Option<number>;
	purchasePriceAmount: Option<number>;
	landAmount: Option<number>;
	alterationsImprovementsAndRepairsAmount: Option<number>;
	refinanceIncludingDebtsToBePaidOffAmount: Option<number>;
	prepaidItemsEstimatedAmount: Option<number>;
	estimatedClosingCostsAmount: Option<number>;
	miAndFundingFeeTotalAmount: Option<number>;
	borrowerPaidDiscountPointsTotalAmount: Option<number>;
	subordinateLienAmount: Option<number>;
	sellerPaidClosingCostsAmount: Option<number>;
	miAndFundingFeeFinancedAmount: Option<number>;
	purchaseCredits: Option<Array<LELodasoftCommonModelsMortgagePurchaseCreditViewModel>>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsMortgageTransactionDetailViewModelIO = type({
	transactionDetailId: createOptionFromNullable(number, 'transactionDetailId'),
	purchasePriceAmount: createOptionFromNullable(number, 'purchasePriceAmount'),
	landAmount: createOptionFromNullable(number, 'landAmount'),
	alterationsImprovementsAndRepairsAmount: createOptionFromNullable(
		number,
		'alterationsImprovementsAndRepairsAmount',
	),
	refinanceIncludingDebtsToBePaidOffAmount: createOptionFromNullable(
		number,
		'refinanceIncludingDebtsToBePaidOffAmount',
	),
	prepaidItemsEstimatedAmount: createOptionFromNullable(number, 'prepaidItemsEstimatedAmount'),
	estimatedClosingCostsAmount: createOptionFromNullable(number, 'estimatedClosingCostsAmount'),
	miAndFundingFeeTotalAmount: createOptionFromNullable(number, 'miAndFundingFeeTotalAmount'),
	borrowerPaidDiscountPointsTotalAmount: createOptionFromNullable(number, 'borrowerPaidDiscountPointsTotalAmount'),
	subordinateLienAmount: createOptionFromNullable(number, 'subordinateLienAmount'),
	sellerPaidClosingCostsAmount: createOptionFromNullable(number, 'sellerPaidClosingCostsAmount'),
	miAndFundingFeeFinancedAmount: createOptionFromNullable(number, 'miAndFundingFeeFinancedAmount'),
	purchaseCredits: createOptionFromNullable(
		array(LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO),
		'purchaseCredits',
	),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
