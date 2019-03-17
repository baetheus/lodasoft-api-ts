import { Option } from 'fp-ts/lib/Option';
import { number, union, literal, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsMortgagePurchaseCreditViewModel = {
	purchaseCreditId: Option<number>;
	transactionDetailId: Option<number>;
	purchaseCreditType: Option<
		| 'BridgeLoan'
		| 'CashOnHand'
		| 'CheckingSavings'
		| 'DepositOnSalesContract'
		| 'EquityOnPendingSale'
		| 'EquityOnSoldProperty'
		| 'EquityOnSubjectProperty'
		| 'GiftFunds'
		| 'LifeInsuranceCashValue'
		| 'LotEquity'
		| 'OtherTypeOfDownPayment'
		| 'RentWithOptionToPurchase'
		| 'RetirementFunds'
		| 'SaleOfChattel'
		| 'SecuredBorrowedFunds'
		| 'StocksAndBonds'
		| 'SweatEquity'
		| 'TradeEquity'
		| 'TrustFunds'
		| 'UnsecuredBorrowedFunds'
		| 'EarnestMoney'
		| 'RelocationFunds'
		| 'EmployerAssistedHousing'
		| 'LeasePurchaseFund'
		| 'Other'
	>;
	purchaseCreditAmount: Option<number>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO = type({
	purchaseCreditId: createOptionFromNullable(number),
	transactionDetailId: createOptionFromNullable(number),
	purchaseCreditType: createOptionFromNullable(
		union([
			literal('BridgeLoan'),
			literal('CashOnHand'),
			literal('CheckingSavings'),
			literal('DepositOnSalesContract'),
			literal('EquityOnPendingSale'),
			literal('EquityOnSoldProperty'),
			literal('EquityOnSubjectProperty'),
			literal('GiftFunds'),
			literal('LifeInsuranceCashValue'),
			literal('LotEquity'),
			literal('OtherTypeOfDownPayment'),
			literal('RentWithOptionToPurchase'),
			literal('RetirementFunds'),
			literal('SaleOfChattel'),
			literal('SecuredBorrowedFunds'),
			literal('StocksAndBonds'),
			literal('SweatEquity'),
			literal('TradeEquity'),
			literal('TrustFunds'),
			literal('UnsecuredBorrowedFunds'),
			literal('EarnestMoney'),
			literal('RelocationFunds'),
			literal('EmployerAssistedHousing'),
			literal('LeasePurchaseFund'),
			literal('Other'),
		]),
	),
	purchaseCreditAmount: createOptionFromNullable(number),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
