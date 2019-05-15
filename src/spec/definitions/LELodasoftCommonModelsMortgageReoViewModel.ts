import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import { createEnumType } from '@nll/utils-ts/lib/io';

export enum TypeOfPropertyEnum {
	'SingleFamily',
	'Condo',
	'Townhouse',
	'Coop',
	'TwoToFourUnitProperty',
	'MultifamilyMoreThanFourUnits',
	'CommercialNonResidential',
	'MixedUseResidential',
	'Farm',
	'HomeAndBusinessCombined',
	'Land',
}

export enum DispositionStatusEnum {
	'Sold',
	'PendingSale',
	'RetainForPrimaryOrSecondaryResidence',
	'RentalProperty',
}

export type LELodasoftCommonModelsMortgageReoViewModel = {
	reoId: Option<number>;
	borrowerId: Option<number>;
	addressId: Option<number>;
	typeOfProperty: Option<TypeOfPropertyEnum>;
	dispositionStatus: Option<DispositionStatusEnum>;
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
	reoId: createOptionFromOptional(number, 'reoId'),
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	addressId: createOptionFromOptional(number, 'addressId'),
	typeOfProperty: createOptionFromOptional(
		createEnumType<TypeOfPropertyEnum>(TypeOfPropertyEnum, 'TypeOfPropertyEnum'),
		'typeOfProperty',
	),
	dispositionStatus: createOptionFromOptional(
		createEnumType<DispositionStatusEnum>(DispositionStatusEnum, 'DispositionStatusEnum'),
		'dispositionStatus',
	),
	marketValue: createOptionFromOptional(number, 'marketValue'),
	amountOfMortgage: createOptionFromOptional(number, 'amountOfMortgage'),
	grossRentalIncome: createOptionFromOptional(number, 'grossRentalIncome'),
	netRentalIncome: createOptionFromOptional(number, 'netRentalIncome'),
	mortgagePayment: createOptionFromOptional(number, 'mortgagePayment'),
	monthlyMiscExpenses: createOptionFromOptional(number, 'monthlyMiscExpenses'),
	isCurrentResidence: createOptionFromOptional(boolean, 'isCurrentResidence'),
	isSubjectProperty: createOptionFromOptional(boolean, 'isSubjectProperty'),
	address: createOptionFromOptional(LELodasoftCommonModelsMortgageAddressViewModelIO, 'address'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
