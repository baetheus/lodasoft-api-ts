import { createEnumType } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';
import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';

import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';

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
	assetId: createOptionFromOptional(number, 'assetId'),
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	addressId: createOptionFromOptional(number, 'addressId'),
	assetType: createOptionFromOptional(createEnumType<AssetTypeEnum>(AssetTypeEnum, 'AssetTypeEnum'), 'assetType'),
	cashMarketValue: createOptionFromOptional(number, 'cashMarketValue'),
	accountNumber: createOptionFromOptional(string, 'accountNumber'),
	depository: createOptionFromOptional(string, 'depository'),
	makeModel: createOptionFromOptional(string, 'makeModel'),
	year: createOptionFromOptional(number, 'year'),
	disposition: createOptionFromOptional(string, 'disposition'),
	amountOfMortgageLien: createOptionFromOptional(number, 'amountOfMortgageLien'),
	morgagePayment: createOptionFromOptional(number, 'morgagePayment'),
	gross: createOptionFromOptional(number, 'gross'),
	netRentalIncome: createOptionFromOptional(number, 'netRentalIncome'),
	insMainTaxMisc: createOptionFromOptional(number, 'insMainTaxMisc'),
	address: createOptionFromOptional(LELodasoftCommonModelsMortgageAddressViewModelIO, 'address'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
