import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, keyof, boolean, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsMortgageReoViewModel = {
	reoId: Option<number>;
	borrowerId: Option<number>;
	addressId: Option<number>;
	typeOfProperty: Option<
		| 'SingleFamily'
		| 'Condo'
		| 'Townhouse'
		| 'Coop'
		| 'TwoToFourUnitProperty'
		| 'MultifamilyMoreThanFourUnits'
		| 'CommercialNonResidential'
		| 'MixedUseResidential'
		| 'Farm'
		| 'HomeAndBusinessCombined'
		| 'Land'
	>;
	dispositionStatus: Option<'Sold' | 'PendingSale' | 'RetainForPrimaryOrSecondaryResidence' | 'RentalProperty'>;
	marketValue: Option<number>;
	amountOfMortgage: Option<number>;
	grossRentalIncome: Option<number>;
	netRentalIncome: Option<number>;
	mortgagePayment: Option<number>;
	monthlyMiscExpenses: Option<number>;
	isCurrentResidence: Option<boolean>;
	isSubjectProperty: Option<boolean>;
	address: Option<LELodasoftCommonModelsMortgageAddressViewModel>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsMortgageReoViewModelIO = type({
	reoId: createOptionFromNullable(number, 'reoId'),
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	addressId: createOptionFromNullable(number, 'addressId'),
	typeOfProperty: createOptionFromNullable(
		keyof({
			SingleFamily: null,
			Condo: null,
			Townhouse: null,
			Coop: null,
			TwoToFourUnitProperty: null,
			MultifamilyMoreThanFourUnits: null,
			CommercialNonResidential: null,
			MixedUseResidential: null,
			Farm: null,
			HomeAndBusinessCombined: null,
			Land: null,
		}),
		'typeOfProperty',
	),
	dispositionStatus: createOptionFromNullable(
		keyof({ Sold: null, PendingSale: null, RetainForPrimaryOrSecondaryResidence: null, RentalProperty: null }),
		'dispositionStatus',
	),
	marketValue: createOptionFromNullable(number, 'marketValue'),
	amountOfMortgage: createOptionFromNullable(number, 'amountOfMortgage'),
	grossRentalIncome: createOptionFromNullable(number, 'grossRentalIncome'),
	netRentalIncome: createOptionFromNullable(number, 'netRentalIncome'),
	mortgagePayment: createOptionFromNullable(number, 'mortgagePayment'),
	monthlyMiscExpenses: createOptionFromNullable(number, 'monthlyMiscExpenses'),
	isCurrentResidence: createOptionFromNullable(boolean, 'isCurrentResidence'),
	isSubjectProperty: createOptionFromNullable(boolean, 'isSubjectProperty'),
	address: createOptionFromNullable(LELodasoftCommonModelsMortgageAddressViewModelIO, 'address'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
