import {
	LELodasoftCommonModelsMortgagePurchaseCreditViewModel,
	LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgagePurchaseCreditViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, array, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
	transactionDetailId: createOptionFromOptional(number, 'transactionDetailId'),
	purchasePriceAmount: createOptionFromOptional(number, 'purchasePriceAmount'),
	landAmount: createOptionFromOptional(number, 'landAmount'),
	alterationsImprovementsAndRepairsAmount: createOptionFromOptional(
		number,
		'alterationsImprovementsAndRepairsAmount',
	),
	refinanceIncludingDebtsToBePaidOffAmount: createOptionFromOptional(
		number,
		'refinanceIncludingDebtsToBePaidOffAmount',
	),
	prepaidItemsEstimatedAmount: createOptionFromOptional(number, 'prepaidItemsEstimatedAmount'),
	estimatedClosingCostsAmount: createOptionFromOptional(number, 'estimatedClosingCostsAmount'),
	miAndFundingFeeTotalAmount: createOptionFromOptional(number, 'miAndFundingFeeTotalAmount'),
	borrowerPaidDiscountPointsTotalAmount: createOptionFromOptional(number, 'borrowerPaidDiscountPointsTotalAmount'),
	subordinateLienAmount: createOptionFromOptional(number, 'subordinateLienAmount'),
	sellerPaidClosingCostsAmount: createOptionFromOptional(number, 'sellerPaidClosingCostsAmount'),
	miAndFundingFeeFinancedAmount: createOptionFromOptional(number, 'miAndFundingFeeFinancedAmount'),
	purchaseCredits: createOptionFromOptional(
		array(LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO),
		'purchaseCredits',
	),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
