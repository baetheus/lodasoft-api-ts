import { Option } from 'fp-ts/lib/Option';
import { number, keyof, string, type } from 'io-ts';
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
		| 'LenderCredit'
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
		keyof({
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
		}),
	),
	purchaseCreditAmount: createOptionFromNullable(number),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
