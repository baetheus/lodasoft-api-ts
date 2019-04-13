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
	reoId: createOptionFromNullable(number),
	borrowerId: createOptionFromNullable(number),
	addressId: createOptionFromNullable(number),
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
	),
	dispositionStatus: createOptionFromNullable(
		keyof({ Sold: null, PendingSale: null, RetainForPrimaryOrSecondaryResidence: null, RentalProperty: null }),
	),
	marketValue: createOptionFromNullable(number),
	amountOfMortgage: createOptionFromNullable(number),
	grossRentalIncome: createOptionFromNullable(number),
	netRentalIncome: createOptionFromNullable(number),
	mortgagePayment: createOptionFromNullable(number),
	monthlyMiscExpenses: createOptionFromNullable(number),
	isCurrentResidence: createOptionFromNullable(boolean),
	isSubjectProperty: createOptionFromNullable(boolean),
	address: createOptionFromNullable(LELodasoftCommonModelsMortgageAddressViewModelIO),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
