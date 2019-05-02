import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import { createEnumType } from '../utils/utils';

export enum AssetTypeEnum {
	'Automobile',
	'Bond',
	'BridgeLoanNotDeposited',
	'Cash',
	'CertificateOfDepositTimeDeposit',
	'CheckingAccount',
	'EarnestMoneyCashDepositTowardPurchase',
	'GiftsTotal',
	'GiftsNotDeposited',
	'LifeInsurance',
	'MoneyMarketFund',
	'MutualFund',
	'NetWorthOfBusinessOwned',
	'OtherLiquidAssets',
	'OtherNonLiquidAssets',
	'PendingNetSaleProceedsFromRealEstateAssets',
	'RelocationMoney',
	'RetirementFund',
	'SaleOtherAssets',
	'SavingsAccount',
	'SecuredBorrowedFundsNotDeposited',
	'Stock',
	'TrustAccount',
}

export type LELodasoftCommonModelsMortgageAssetViewModel = {
	assetId: Option<number>;
	borrowerId: Option<number>;
	addressId: Option<number>;
	assetType: Option<AssetTypeEnum>;
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
	assetId: createOptionFromNullable(number, 'assetId'),
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	addressId: createOptionFromNullable(number, 'addressId'),
	assetType: createOptionFromNullable(createEnumType<AssetTypeEnum>(AssetTypeEnum, 'AssetTypeEnum'), 'assetType'),
	cashMarketValue: createOptionFromNullable(number, 'cashMarketValue'),
	accountNumber: createOptionFromNullable(string, 'accountNumber'),
	depository: createOptionFromNullable(string, 'depository'),
	makeModel: createOptionFromNullable(string, 'makeModel'),
	year: createOptionFromNullable(number, 'year'),
	disposition: createOptionFromNullable(string, 'disposition'),
	amountOfMortgageLien: createOptionFromNullable(number, 'amountOfMortgageLien'),
	morgagePayment: createOptionFromNullable(number, 'morgagePayment'),
	gross: createOptionFromNullable(number, 'gross'),
	netRentalIncome: createOptionFromNullable(number, 'netRentalIncome'),
	insMainTaxMisc: createOptionFromNullable(number, 'insMainTaxMisc'),
	address: createOptionFromNullable(LELodasoftCommonModelsMortgageAddressViewModelIO, 'address'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
