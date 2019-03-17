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
	transactionDetailId: createOptionFromNullable(number),
	purchasePriceAmount: createOptionFromNullable(number),
	landAmount: createOptionFromNullable(number),
	alterationsImprovementsAndRepairsAmount: createOptionFromNullable(number),
	refinanceIncludingDebtsToBePaidOffAmount: createOptionFromNullable(number),
	prepaidItemsEstimatedAmount: createOptionFromNullable(number),
	estimatedClosingCostsAmount: createOptionFromNullable(number),
	miAndFundingFeeTotalAmount: createOptionFromNullable(number),
	borrowerPaidDiscountPointsTotalAmount: createOptionFromNullable(number),
	subordinateLienAmount: createOptionFromNullable(number),
	sellerPaidClosingCostsAmount: createOptionFromNullable(number),
	miAndFundingFeeFinancedAmount: createOptionFromNullable(number),
	purchaseCredits: createOptionFromNullable(array(LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO)),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
