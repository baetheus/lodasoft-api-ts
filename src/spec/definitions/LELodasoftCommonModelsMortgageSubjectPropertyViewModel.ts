import { Option } from 'fp-ts/lib/Option';
import { keyof, number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import { createEnumType } from '../../io-types';
import {
  LELodasoftCommonModelsMortgageAddressViewModel,
  LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';

export enum PurposeOfLoan {
	Refinance,
	Purchase,
	ConstructionOnly,
	ConstructionToPermanent,
	OtherLoanPurpose,
	RefinanceCashOut,
}

export type LELodasoftCommonModelsMortgageSubjectPropertyViewModel = {
	subjectPropertyId: Option<number>;
	addressId: Option<number>;
	purposeOfLoan: Option<PurposeOfLoan>;
	propertyWillBe: Option<'PrimaryResidence' | 'SecondaryResidence' | 'Investment' | 'ShortTermRental'>;
	noOfUnits: Option<number>;
	propertyType: Option<
		| 'SFRAttached'
		| 'Condominium'
		| 'Cooperative'
		| 'SFR'
		| 'HighRiseCondominium'
		| 'ManufacturedHousing'
		| 'Modular'
		| 'PUD'
		| 'ManufacturedHousingSingleWide'
		| 'ManufacturedHousingDoubleWide'
		| 'DetachedCondominium'
		| 'ManufacturedHomeCondominium'
		| 'ManufacturedHousingMultiWide'
		| 'ManufacturedHomeCondominiumOrPUDOrCooperative'
		| 'TwoTo4UnitBuilding'
		| 'NonWarrantedCondo'
	>;
	yearBuilt: Option<number>;
	originalCost: Option<number>;
	amountOutstanding: Option<number>;
	presentValue: Option<number>;
	improvementCost: Option<number>;
	originalCostYear: Option<number>;
	amountExistLiensYear: Option<number>;
	refiPurpose: Option<
		'Purchase' | 'RefinanceCashOut' | 'RefinanceNoCashOut' | 'StreamlinedRefinance' | 'Construction'
	>;
	describeImprovement: Option<string>;
	improvementStatus: Option<'Made' | 'ToBeMade'>;
	cost: Option<number>;
	titleNames: Option<string>;
	explain: Option<string>;
	manner: Option<string>;
	estate: Option<'FeeSimple' | 'LeaseHold'>;
	address: Option<LELodasoftCommonModelsMortgageAddressViewModel>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsMortgageSubjectPropertyViewModelIO = type({
	subjectPropertyId: createOptionFromNullable(number),
	addressId: createOptionFromNullable(number),
	purposeOfLoan: createOptionFromNullable(createEnumType<PurposeOfLoan>(PurposeOfLoan, 'PurposeOfLoan')),
	propertyWillBe: createOptionFromNullable(
		keyof({ PrimaryResidence: null, SecondaryResidence: null, Investment: null, ShortTermRental: null }),
	),
	noOfUnits: createOptionFromNullable(number),
	propertyType: createOptionFromNullable(
		keyof({
			SFRAttached: null,
			Condominium: null,
			Cooperative: null,
			SFR: null,
			HighRiseCondominium: null,
			ManufacturedHousing: null,
			Modular: null,
			PUD: null,
			ManufacturedHousingSingleWide: null,
			ManufacturedHousingDoubleWide: null,
			DetachedCondominium: null,
			ManufacturedHomeCondominium: null,
			ManufacturedHousingMultiWide: null,
			ManufacturedHomeCondominiumOrPUDOrCooperative: null,
			TwoTo4UnitBuilding: null,
			NonWarrantedCondo: null,
		}),
	),
	yearBuilt: createOptionFromNullable(number),
	originalCost: createOptionFromNullable(number),
	amountOutstanding: createOptionFromNullable(number),
	presentValue: createOptionFromNullable(number),
	improvementCost: createOptionFromNullable(number),
	originalCostYear: createOptionFromNullable(number),
	amountExistLiensYear: createOptionFromNullable(number),
	refiPurpose: createOptionFromNullable(
		keyof({
			Purchase: null,
			RefinanceCashOut: null,
			RefinanceNoCashOut: null,
			StreamlinedRefinance: null,
			Construction: null,
		}),
	),
	describeImprovement: createOptionFromNullable(string),
	improvementStatus: createOptionFromNullable(keyof({ Made: null, ToBeMade: null })),
	cost: createOptionFromNullable(number),
	titleNames: createOptionFromNullable(string),
	explain: createOptionFromNullable(string),
	manner: createOptionFromNullable(string),
	estate: createOptionFromNullable(keyof({ FeeSimple: null, LeaseHold: null })),
	address: createOptionFromNullable(LELodasoftCommonModelsMortgageAddressViewModelIO),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
