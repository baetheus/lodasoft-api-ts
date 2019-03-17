import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, union, literal, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsMortgageSubjectPropertyViewModel = {
	subjectPropertyId: Option<number>;
	addressId: Option<number>;
	purposeOfLoan: Option<
		| 'Refinance'
		| 'Purchase'
		| 'ConstructionOnly'
		| 'ConstructionToPermanent'
		| 'OtherLoanPurpose'
		| 'RefinanceCashOut'
	>;
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
	purposeOfLoan: createOptionFromNullable(
		union([
			literal('Refinance'),
			literal('Purchase'),
			literal('ConstructionOnly'),
			literal('ConstructionToPermanent'),
			literal('OtherLoanPurpose'),
			literal('RefinanceCashOut'),
		]),
	),
	propertyWillBe: createOptionFromNullable(
		union([
			literal('PrimaryResidence'),
			literal('SecondaryResidence'),
			literal('Investment'),
			literal('ShortTermRental'),
		]),
	),
	noOfUnits: createOptionFromNullable(number),
	propertyType: createOptionFromNullable(
		union([
			literal('SFRAttached'),
			literal('Condominium'),
			literal('Cooperative'),
			literal('SFR'),
			literal('HighRiseCondominium'),
			literal('ManufacturedHousing'),
			literal('Modular'),
			literal('PUD'),
			literal('ManufacturedHousingSingleWide'),
			literal('ManufacturedHousingDoubleWide'),
			literal('DetachedCondominium'),
			literal('ManufacturedHomeCondominium'),
			literal('ManufacturedHousingMultiWide'),
			literal('ManufacturedHomeCondominiumOrPUDOrCooperative'),
			literal('TwoTo4UnitBuilding'),
			literal('NonWarrantedCondo'),
		]),
	),
	yearBuilt: createOptionFromNullable(number),
	originalCost: createOptionFromNullable(number),
	amountOutstanding: createOptionFromNullable(number),
	presentValue: createOptionFromNullable(number),
	improvementCost: createOptionFromNullable(number),
	originalCostYear: createOptionFromNullable(number),
	amountExistLiensYear: createOptionFromNullable(number),
	refiPurpose: createOptionFromNullable(
		union([
			literal('Purchase'),
			literal('RefinanceCashOut'),
			literal('RefinanceNoCashOut'),
			literal('StreamlinedRefinance'),
			literal('Construction'),
		]),
	),
	describeImprovement: createOptionFromNullable(string),
	improvementStatus: createOptionFromNullable(union([literal('Made'), literal('ToBeMade')])),
	cost: createOptionFromNullable(number),
	titleNames: createOptionFromNullable(string),
	explain: createOptionFromNullable(string),
	manner: createOptionFromNullable(string),
	estate: createOptionFromNullable(union([literal('FeeSimple'), literal('LeaseHold')])),
	address: createOptionFromNullable(LELodasoftCommonModelsMortgageAddressViewModelIO),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
