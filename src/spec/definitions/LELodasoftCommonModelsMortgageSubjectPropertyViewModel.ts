import { Option } from 'fp-ts/lib/Option';
import { keyof, number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import { createEnumType } from '../utils/utils';

export enum PurposeOfLoan {
	'Refinance',
	'Purchase',
	'ConstructionOnly',
	'ConstructionToPermanent',
	'OtherLoanPurpose',
	'RefinanceCashOut',
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
	subjectPropertyId: createOptionFromNullable(number, 'subjectPropertyId'),
	addressId: createOptionFromNullable(number, 'addressId'),
	purposeOfLoan: createOptionFromNullable(
		createEnumType<PurposeOfLoan>(PurposeOfLoan, 'PurposeOfLoan'),
		'purposeOfLoan',
	),
	propertyWillBe: createOptionFromNullable(
		keyof({ PrimaryResidence: null, SecondaryResidence: null, Investment: null, ShortTermRental: null }),
		'propertyWillBe',
	),
	noOfUnits: createOptionFromNullable(number, 'noOfUnits'),
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
		'propertyType',
	),
	yearBuilt: createOptionFromNullable(number, 'yearBuilt'),
	originalCost: createOptionFromNullable(number, 'originalCost'),
	amountOutstanding: createOptionFromNullable(number, 'amountOutstanding'),
	presentValue: createOptionFromNullable(number, 'presentValue'),
	improvementCost: createOptionFromNullable(number, 'improvementCost'),
	originalCostYear: createOptionFromNullable(number, 'originalCostYear'),
	amountExistLiensYear: createOptionFromNullable(number, 'amountExistLiensYear'),
	refiPurpose: createOptionFromNullable(
		keyof({
			Purchase: null,
			RefinanceCashOut: null,
			RefinanceNoCashOut: null,
			StreamlinedRefinance: null,
			Construction: null,
		}),
		'refiPurpose',
	),
	describeImprovement: createOptionFromNullable(string, 'describeImprovement'),
	improvementStatus: createOptionFromNullable(keyof({ Made: null, ToBeMade: null }), 'improvementStatus'),
	cost: createOptionFromNullable(number, 'cost'),
	titleNames: createOptionFromNullable(string, 'titleNames'),
	explain: createOptionFromNullable(string, 'explain'),
	manner: createOptionFromNullable(string, 'manner'),
	estate: createOptionFromNullable(keyof({ FeeSimple: null, LeaseHold: null }), 'estate'),
	address: createOptionFromNullable(LELodasoftCommonModelsMortgageAddressViewModelIO, 'address'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
