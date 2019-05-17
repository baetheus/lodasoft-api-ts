import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import { createEnumType } from '@nll/utils-ts/lib/io';

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
	subjectPropertyId: createOptionFromOptional(number, 'subjectPropertyId'),
	addressId: createOptionFromOptional(number, 'addressId'),
	purposeOfLoan: createOptionFromOptional(
		createEnumType<PurposeOfLoanEnum>(PurposeOfLoanEnum, 'PurposeOfLoanEnum'),
		'purposeOfLoan',
	),
	propertyWillBe: createOptionFromOptional(
		createEnumType<PropertyWillBeEnum>(PropertyWillBeEnum, 'PropertyWillBeEnum'),
		'propertyWillBe',
	),
	noOfUnits: createOptionFromOptional(number, 'noOfUnits'),
	propertyType: createOptionFromOptional(
		createEnumType<PropertyTypeEnum>(PropertyTypeEnum, 'PropertyTypeEnum'),
		'propertyType',
	),
	yearBuilt: createOptionFromOptional(number, 'yearBuilt'),
	originalCost: createOptionFromOptional(number, 'originalCost'),
	amountOutstanding: createOptionFromOptional(number, 'amountOutstanding'),
	presentValue: createOptionFromOptional(number, 'presentValue'),
	improvementCost: createOptionFromOptional(number, 'improvementCost'),
	originalCostYear: createOptionFromOptional(number, 'originalCostYear'),
	amountExistLiensYear: createOptionFromOptional(number, 'amountExistLiensYear'),
	refiPurpose: createOptionFromOptional(
		createEnumType<RefiPurposeEnum>(RefiPurposeEnum, 'RefiPurposeEnum'),
		'refiPurpose',
	),
	describeImprovement: createOptionFromOptional(string, 'describeImprovement'),
	improvementStatus: createOptionFromOptional(
		createEnumType<ImprovementStatusEnum>(ImprovementStatusEnum, 'ImprovementStatusEnum'),
		'improvementStatus',
	),
	cost: createOptionFromOptional(number, 'cost'),
	titleNames: createOptionFromOptional(string, 'titleNames'),
	explain: createOptionFromOptional(string, 'explain'),
	manner: createOptionFromOptional(string, 'manner'),
	estate: createOptionFromOptional(createEnumType<EstateEnum>(EstateEnum, 'EstateEnum'), 'estate'),
	address: createOptionFromOptional(LELodasoftCommonModelsMortgageAddressViewModelIO, 'address'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromDatelike, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromDatelike, 'dateUpdated'),
});
