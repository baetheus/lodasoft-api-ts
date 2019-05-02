import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import { createEnumType } from '../utils/utils';

export enum PurposeOfLoanEnum {
	'Refinance',
	'Purchase',
	'ConstructionOnly',
	'ConstructionToPermanent',
	'OtherLoanPurpose',
	'RefinanceCashOut',
}

export enum PropertyWillBeEnum {
	'PrimaryResidence',
	'SecondaryResidence',
	'Investment',
	'ShortTermRental',
}

export enum PropertyTypeEnum {
	'SFRAttached',
	'Condominium',
	'Cooperative',
	'SFR',
	'HighRiseCondominium',
	'ManufacturedHousing',
	'Modular',
	'PUD',
	'ManufacturedHousingSingleWide',
	'ManufacturedHousingDoubleWide',
	'DetachedCondominium',
	'ManufacturedHomeCondominium',
	'ManufacturedHousingMultiWide',
	'ManufacturedHomeCondominiumOrPUDOrCooperative',
	'TwoTo4UnitBuilding',
	'NonWarrantedCondo',
}

export enum RefiPurposeEnum {
	'Purchase',
	'RefinanceCashOut',
	'RefinanceNoCashOut',
	'StreamlinedRefinance',
	'Construction',
}

export enum ImprovementStatusEnum {
	'Made',
	'ToBeMade',
}

export enum EstateEnum {
	'FeeSimple',
	'LeaseHold',
}

export type LELodasoftCommonModelsMortgageSubjectPropertyViewModel = {
	subjectPropertyId: Option<number>;
	addressId: Option<number>;
	purposeOfLoan: Option<PurposeOfLoanEnum>;
	propertyWillBe: Option<PropertyWillBeEnum>;
	noOfUnits: Option<number>;
	propertyType: Option<PropertyTypeEnum>;
	yearBuilt: Option<number>;
	originalCost: Option<number>;
	amountOutstanding: Option<number>;
	presentValue: Option<number>;
	improvementCost: Option<number>;
	originalCostYear: Option<number>;
	amountExistLiensYear: Option<number>;
	refiPurpose: Option<RefiPurposeEnum>;
	describeImprovement: Option<string>;
	improvementStatus: Option<ImprovementStatusEnum>;
	cost: Option<number>;
	titleNames: Option<string>;
	explain: Option<string>;
	manner: Option<string>;
	estate: Option<EstateEnum>;
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
		createEnumType<PurposeOfLoanEnum>(PurposeOfLoanEnum, 'PurposeOfLoanEnum'),
		'purposeOfLoan',
	),
	propertyWillBe: createOptionFromNullable(
		createEnumType<PropertyWillBeEnum>(PropertyWillBeEnum, 'PropertyWillBeEnum'),
		'propertyWillBe',
	),
	noOfUnits: createOptionFromNullable(number, 'noOfUnits'),
	propertyType: createOptionFromNullable(
		createEnumType<PropertyTypeEnum>(PropertyTypeEnum, 'PropertyTypeEnum'),
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
		createEnumType<RefiPurposeEnum>(RefiPurposeEnum, 'RefiPurposeEnum'),
		'refiPurpose',
	),
	describeImprovement: createOptionFromNullable(string, 'describeImprovement'),
	improvementStatus: createOptionFromNullable(
		createEnumType<ImprovementStatusEnum>(ImprovementStatusEnum, 'ImprovementStatusEnum'),
		'improvementStatus',
	),
	cost: createOptionFromNullable(number, 'cost'),
	titleNames: createOptionFromNullable(string, 'titleNames'),
	explain: createOptionFromNullable(string, 'explain'),
	manner: createOptionFromNullable(string, 'manner'),
	estate: createOptionFromNullable(createEnumType<EstateEnum>(EstateEnum, 'EstateEnum'), 'estate'),
	address: createOptionFromNullable(LELodasoftCommonModelsMortgageAddressViewModelIO, 'address'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
