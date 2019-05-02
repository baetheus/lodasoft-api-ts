import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

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
	purchaseCreditId: createOptionFromNullable(number, 'purchaseCreditId'),
	transactionDetailId: createOptionFromNullable(number, 'transactionDetailId'),
	purchaseCreditType: createOptionFromNullable(
		createEnumType<PurchaseCreditTypeEnum>(PurchaseCreditTypeEnum, 'PurchaseCreditTypeEnum'),
		'purchaseCreditType',
	),
	purchaseCreditAmount: createOptionFromNullable(number, 'purchaseCreditAmount'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
