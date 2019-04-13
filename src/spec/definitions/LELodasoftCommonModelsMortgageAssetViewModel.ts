import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, keyof, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsMortgageAssetViewModel = {
	assetId: Option<number>;
	borrowerId: Option<number>;
	addressId: Option<number>;
	assetType: Option<
		| 'Automobile'
		| 'Bond'
		| 'BridgeLoanNotDeposited'
		| 'Cash'
		| 'CertificateOfDepositTimeDeposit'
		| 'CheckingAccount'
		| 'EarnestMoneyCashDepositTowardPurchase'
		| 'GiftsTotal'
		| 'GiftsNotDeposited'
		| 'LifeInsurance'
		| 'MoneyMarketFund'
		| 'MutualFund'
		| 'NetWorthOfBusinessOwned'
		| 'OtherLiquidAssets'
		| 'OtherNonLiquidAssets'
		| 'PendingNetSaleProceedsFromRealEstateAssets'
		| 'RelocationMoney'
		| 'RetirementFund'
		| 'SaleOtherAssets'
		| 'SavingsAccount'
		| 'SecuredBorrowedFundsNotDeposited'
		| 'Stock'
		| 'TrustAccount'
	>;
	cashMarketValue: Option<number>;
	accountNumber: Option<string>;
	depository: Option<string>;
	makeModel: Option<string>;
	year: Option<number>;
	disposition: Option<string>;
	amountOfMortgageLien: Option<number>;
	morgagePayment: Option<number>;
	gross: Option<number>;
	netRentalIncome: Option<number>;
	insMainTaxMisc: Option<number>;
	address: Option<LELodasoftCommonModelsMortgageAddressViewModel>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsMortgageAssetViewModelIO = type({
	assetId: createOptionFromNullable(number),
	borrowerId: createOptionFromNullable(number),
	addressId: createOptionFromNullable(number),
	assetType: createOptionFromNullable(
		keyof({
			Automobile: null,
			Bond: null,
			BridgeLoanNotDeposited: null,
			Cash: null,
			CertificateOfDepositTimeDeposit: null,
			CheckingAccount: null,
			EarnestMoneyCashDepositTowardPurchase: null,
			GiftsTotal: null,
			GiftsNotDeposited: null,
			LifeInsurance: null,
			MoneyMarketFund: null,
			MutualFund: null,
			NetWorthOfBusinessOwned: null,
			OtherLiquidAssets: null,
			OtherNonLiquidAssets: null,
			PendingNetSaleProceedsFromRealEstateAssets: null,
			RelocationMoney: null,
			RetirementFund: null,
			SaleOtherAssets: null,
			SavingsAccount: null,
			SecuredBorrowedFundsNotDeposited: null,
			Stock: null,
			TrustAccount: null,
		}),
	),
	cashMarketValue: createOptionFromNullable(number),
	accountNumber: createOptionFromNullable(string),
	depository: createOptionFromNullable(string),
	makeModel: createOptionFromNullable(string),
	year: createOptionFromNullable(number),
	disposition: createOptionFromNullable(string),
	amountOfMortgageLien: createOptionFromNullable(number),
	morgagePayment: createOptionFromNullable(number),
	gross: createOptionFromNullable(number),
	netRentalIncome: createOptionFromNullable(number),
	insMainTaxMisc: createOptionFromNullable(number),
	address: createOptionFromNullable(LELodasoftCommonModelsMortgageAddressViewModelIO),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
