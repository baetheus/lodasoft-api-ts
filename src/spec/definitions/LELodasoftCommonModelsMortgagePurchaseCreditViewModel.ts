import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

import { createEnumType } from '../utils/utils';

export enum PurchaseCreditTypeEnum {
	'BridgeLoan',
	'CashOnHand',
	'CheckingSavings',
	'DepositOnSalesContract',
	'EquityOnPendingSale',
	'EquityOnSoldProperty',
	'EquityOnSubjectProperty',
	'GiftFunds',
	'LifeInsuranceCashValue',
	'LotEquity',
	'OtherTypeOfDownPayment',
	'RentWithOptionToPurchase',
	'RetirementFunds',
	'SaleOfChattel',
	'SecuredBorrowedFunds',
	'StocksAndBonds',
	'SweatEquity',
	'TradeEquity',
	'TrustFunds',
	'UnsecuredBorrowedFunds',
	'EarnestMoney',
	'RelocationFunds',
	'EmployerAssistedHousing',
	'LeasePurchaseFund',
	'Other',
	'LenderCredit',
}

export type LELodasoftCommonModelsMortgagePurchaseCreditViewModel = {
	purchaseCreditId: Option<number>;
	transactionDetailId: Option<number>;
	purchaseCreditType: Option<PurchaseCreditTypeEnum>;
	purchaseCreditAmount: Option<number>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO = type({
	purchaseCreditId: createOptionFromOptional(number, 'purchaseCreditId'),
	transactionDetailId: createOptionFromOptional(number, 'transactionDetailId'),
	purchaseCreditType: createOptionFromOptional(
		createEnumType<PurchaseCreditTypeEnum>(PurchaseCreditTypeEnum, 'PurchaseCreditTypeEnum'),
		'purchaseCreditType',
	),
	purchaseCreditAmount: createOptionFromOptional(number, 'purchaseCreditAmount'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
