import { Option } from 'fp-ts/lib/Option';
import { array, boolean, number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

import { createEnumType } from '../utils/utils';

export enum CreditScoreRangeEnum {
	'R_760_',
	'R_740_759',
	'R_720_739',
	'R_700_719',
	'R_680_699',
	'R_660_679',
	'R_640_659',
	'R_620_639',
	'R_600_619',
	'R_560_599',
	'R_300_559',
}

export enum CurrentBackerEnum {
	'FannieMae',
	'FreddieMac',
	'FHA',
}

export enum DesiredProgramEnum {
	'Fixed30Year',
	'Fixed20Year',
	'Fixed15Year',
	'Fixed10Year',
	'ARM3',
	'ARM5',
	'ARM7',
	'HomeEquity30Year',
	'HomeEquity30YearDueIn15',
	'HomeEquity15Year',
	'HELOC20Year',
	'HELOC15Year',
	'HELOC10Year',
	'LowOrNoDown',
	'InterestOnly',
}

export enum LoanPurposeEnum {
	'Purchase',
	'Refinance',
	'HomeEquity',
	'Construction',
	'HELOC',
}

export enum PropertyTypeEnum {
	'SingleFamilyHome',
	'TownHouse',
	'CondoFourOrFewerStories',
	'CondoFiveOrMoreStories',
	'Cooperative',
	'MobileOrManufactured',
	'Modular',
	'Leasehold',
}

export enum PropertyUseEnum {
	'Primary',
	'SecondaryOrVacation',
	'InvestmentOrRental',
}

export enum StateAbbreviationEnum {
	'AK',
	'AL',
	'AR',
	'AS',
	'AZ',
	'CA',
	'CO',
	'CT',
	'DC',
	'DE',
	'FL',
	'GA',
	'GU',
	'HI',
	'IA',
	'ID',
	'IL',
	'IN',
	'KS',
	'KY',
	'LA',
	'MA',
	'MD',
	'ME',
	'MH',
	'MI',
	'MN',
	'MO',
	'MP',
	'MS',
	'MT',
	'NC',
	'ND',
	'NE',
	'NH',
	'NJ',
	'NM',
	'NV',
	'NY',
	'OH',
	'OK',
	'OR',
	'PA',
	'PR',
	'RI',
	'SC',
	'SD',
	'TN',
	'TX',
	'UT',
	'VA',
	'VI',
	'VT',
	'WA',
	'WI',
	'WV',
	'WY',
}

export enum VeteranTypeEnum {
	'RegularMilitary',
	'Reserves',
	'NationalGuard',
	'SpouseOfRegularMilitary',
	'SpouseOfReserveMilitary',
}

export type LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactDetails = {
	acceptPrepaymentPenalty: Option<boolean>;
	agentBusinessName: Option<string>;
	agentEmailAddress: Option<string>;
	agentFirstName: Option<string>;
	agentId: Option<string>;
	agentLastName: Option<string>;
	agentPhoneNumber: Option<string>;
	annualIncome: Option<number>;
	banks: Option<Array<string>>;
	cashOut: Option<number>;
	city: Option<string>;
	closingTimelineDays: Option<number>;
	coborrowerFirstName: Option<string>;
	coborrowerLastName: Option<string>;
	creditScoreRange: Option<CreditScoreRangeEnum>;
	currentBacker: Option<CurrentBackerEnum>;
	currentBalance: Option<number>;
	debtToIncomePercent: Option<number>;
	desiredPrograms: Option<Array<DesiredProgramEnum>>;
	downPayment: Option<number>;
	fhaStreamlineEligible: Option<boolean>;
	firstTimeBuyer: Option<boolean>;
	harpEligible: Option<boolean>;
	hasAgent: Option<boolean>;
	hasBankruptcy: Option<boolean>;
	hasCoborrower: Option<boolean>;
	hasForeclosure: Option<boolean>;
	hasSecondMortgage: Option<boolean>;
	loanAmount: Option<number>;
	loanPurpose: Option<LoanPurposeEnum>;
	loanToValuePercent: Option<number>;
	message: Option<string>;
	monthlyDebts: Option<number>;
	newConstruction: Option<boolean>;
	propertyAddress: Option<string>;
	propertyType: Option<PropertyTypeEnum>;
	propertyUse: Option<PropertyUseEnum>;
	propertyValue: Option<number>;
	quoteId: Option<string>;
	requestId: Option<string>;
	selfEmployed: Option<boolean>;
	stateAbbreviation: Option<StateAbbreviationEnum>;
	streetAddress: Option<string>;
	totalAssets: Option<number>;
	wantsCashOut: Option<boolean>;
	vaEligible: Option<boolean>;
	vaFirstTimeUser: Option<boolean>;
	vaHasDisability: Option<boolean>;
	veteranType: Option<VeteranTypeEnum>;
	yearPurchased: Option<number>;
	zipCode: Option<string>;
};
export const LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactDetailsIO = type({
	acceptPrepaymentPenalty: createOptionFromNullable(boolean, 'acceptPrepaymentPenalty'),
	agentBusinessName: createOptionFromNullable(string, 'agentBusinessName'),
	agentEmailAddress: createOptionFromNullable(string, 'agentEmailAddress'),
	agentFirstName: createOptionFromNullable(string, 'agentFirstName'),
	agentId: createOptionFromNullable(string, 'agentId'),
	agentLastName: createOptionFromNullable(string, 'agentLastName'),
	agentPhoneNumber: createOptionFromNullable(string, 'agentPhoneNumber'),
	annualIncome: createOptionFromNullable(number, 'annualIncome'),
	banks: createOptionFromNullable(array(string), 'banks'),
	cashOut: createOptionFromNullable(number, 'cashOut'),
	city: createOptionFromNullable(string, 'city'),
	closingTimelineDays: createOptionFromNullable(number, 'closingTimelineDays'),
	coborrowerFirstName: createOptionFromNullable(string, 'coborrowerFirstName'),
	coborrowerLastName: createOptionFromNullable(string, 'coborrowerLastName'),
	creditScoreRange: createOptionFromNullable(
		createEnumType<CreditScoreRangeEnum>(CreditScoreRangeEnum, 'CreditScoreRangeEnum'),
		'creditScoreRange',
	),
	currentBacker: createOptionFromNullable(
		createEnumType<CurrentBackerEnum>(CurrentBackerEnum, 'CurrentBackerEnum'),
		'currentBacker',
	),
	currentBalance: createOptionFromNullable(number, 'currentBalance'),
	debtToIncomePercent: createOptionFromNullable(number, 'debtToIncomePercent'),
	desiredPrograms: createOptionFromNullable(
		array(createEnumType<DesiredProgramEnum>(DesiredProgramEnum, 'DesiredProgramEnum')),
		'desiredPrograms',
	),
	downPayment: createOptionFromNullable(number, 'downPayment'),
	fhaStreamlineEligible: createOptionFromNullable(boolean, 'fhaStreamlineEligible'),
	firstTimeBuyer: createOptionFromNullable(boolean, 'firstTimeBuyer'),
	harpEligible: createOptionFromNullable(boolean, 'harpEligible'),
	hasAgent: createOptionFromNullable(boolean, 'hasAgent'),
	hasBankruptcy: createOptionFromNullable(boolean, 'hasBankruptcy'),
	hasCoborrower: createOptionFromNullable(boolean, 'hasCoborrower'),
	hasForeclosure: createOptionFromNullable(boolean, 'hasForeclosure'),
	hasSecondMortgage: createOptionFromNullable(boolean, 'hasSecondMortgage'),
	loanAmount: createOptionFromNullable(number, 'loanAmount'),
	loanPurpose: createOptionFromNullable(
		createEnumType<LoanPurposeEnum>(LoanPurposeEnum, 'LoanPurposeEnum'),
		'loanPurpose',
	),
	loanToValuePercent: createOptionFromNullable(number, 'loanToValuePercent'),
	message: createOptionFromNullable(string, 'message'),
	monthlyDebts: createOptionFromNullable(number, 'monthlyDebts'),
	newConstruction: createOptionFromNullable(boolean, 'newConstruction'),
	propertyAddress: createOptionFromNullable(string, 'propertyAddress'),
	propertyType: createOptionFromNullable(
		createEnumType<PropertyTypeEnum>(PropertyTypeEnum, 'PropertyTypeEnum'),
		'propertyType',
	),
	propertyUse: createOptionFromNullable(
		createEnumType<PropertyUseEnum>(PropertyUseEnum, 'PropertyUseEnum'),
		'propertyUse',
	),
	propertyValue: createOptionFromNullable(number, 'propertyValue'),
	quoteId: createOptionFromNullable(string, 'quoteId'),
	requestId: createOptionFromNullable(string, 'requestId'),
	selfEmployed: createOptionFromNullable(boolean, 'selfEmployed'),
	stateAbbreviation: createOptionFromNullable(
		createEnumType<StateAbbreviationEnum>(StateAbbreviationEnum, 'StateAbbreviationEnum'),
		'stateAbbreviation',
	),
	streetAddress: createOptionFromNullable(string, 'streetAddress'),
	totalAssets: createOptionFromNullable(number, 'totalAssets'),
	wantsCashOut: createOptionFromNullable(boolean, 'wantsCashOut'),
	vaEligible: createOptionFromNullable(boolean, 'vaEligible'),
	vaFirstTimeUser: createOptionFromNullable(boolean, 'vaFirstTimeUser'),
	vaHasDisability: createOptionFromNullable(boolean, 'vaHasDisability'),
	veteranType: createOptionFromNullable(
		createEnumType<VeteranTypeEnum>(VeteranTypeEnum, 'VeteranTypeEnum'),
		'veteranType',
	),
	yearPurchased: createOptionFromNullable(number, 'yearPurchased'),
	zipCode: createOptionFromNullable(string, 'zipCode'),
});
