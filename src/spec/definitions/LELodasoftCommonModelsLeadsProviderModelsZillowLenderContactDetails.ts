import { Option } from 'fp-ts/lib/Option';
import { array, boolean, number, string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
	acceptPrepaymentPenalty: createOptionFromOptional(boolean, 'acceptPrepaymentPenalty'),
	agentBusinessName: createOptionFromOptional(string, 'agentBusinessName'),
	agentEmailAddress: createOptionFromOptional(string, 'agentEmailAddress'),
	agentFirstName: createOptionFromOptional(string, 'agentFirstName'),
	agentId: createOptionFromOptional(string, 'agentId'),
	agentLastName: createOptionFromOptional(string, 'agentLastName'),
	agentPhoneNumber: createOptionFromOptional(string, 'agentPhoneNumber'),
	annualIncome: createOptionFromOptional(number, 'annualIncome'),
	banks: createOptionFromOptional(array(string), 'banks'),
	cashOut: createOptionFromOptional(number, 'cashOut'),
	city: createOptionFromOptional(string, 'city'),
	closingTimelineDays: createOptionFromOptional(number, 'closingTimelineDays'),
	coborrowerFirstName: createOptionFromOptional(string, 'coborrowerFirstName'),
	coborrowerLastName: createOptionFromOptional(string, 'coborrowerLastName'),
	creditScoreRange: createOptionFromOptional(
		createEnumType<CreditScoreRangeEnum>(CreditScoreRangeEnum, 'CreditScoreRangeEnum'),
		'creditScoreRange',
	),
	currentBacker: createOptionFromOptional(
		createEnumType<CurrentBackerEnum>(CurrentBackerEnum, 'CurrentBackerEnum'),
		'currentBacker',
	),
	currentBalance: createOptionFromOptional(number, 'currentBalance'),
	debtToIncomePercent: createOptionFromOptional(number, 'debtToIncomePercent'),
	desiredPrograms: createOptionFromOptional(
		array(createEnumType<DesiredProgramEnum>(DesiredProgramEnum, 'DesiredProgramEnum')),
		'desiredPrograms',
	),
	downPayment: createOptionFromOptional(number, 'downPayment'),
	fhaStreamlineEligible: createOptionFromOptional(boolean, 'fhaStreamlineEligible'),
	firstTimeBuyer: createOptionFromOptional(boolean, 'firstTimeBuyer'),
	harpEligible: createOptionFromOptional(boolean, 'harpEligible'),
	hasAgent: createOptionFromOptional(boolean, 'hasAgent'),
	hasBankruptcy: createOptionFromOptional(boolean, 'hasBankruptcy'),
	hasCoborrower: createOptionFromOptional(boolean, 'hasCoborrower'),
	hasForeclosure: createOptionFromOptional(boolean, 'hasForeclosure'),
	hasSecondMortgage: createOptionFromOptional(boolean, 'hasSecondMortgage'),
	loanAmount: createOptionFromOptional(number, 'loanAmount'),
	loanPurpose: createOptionFromOptional(
		createEnumType<LoanPurposeEnum>(LoanPurposeEnum, 'LoanPurposeEnum'),
		'loanPurpose',
	),
	loanToValuePercent: createOptionFromOptional(number, 'loanToValuePercent'),
	message: createOptionFromOptional(string, 'message'),
	monthlyDebts: createOptionFromOptional(number, 'monthlyDebts'),
	newConstruction: createOptionFromOptional(boolean, 'newConstruction'),
	propertyAddress: createOptionFromOptional(string, 'propertyAddress'),
	propertyType: createOptionFromOptional(
		createEnumType<PropertyTypeEnum>(PropertyTypeEnum, 'PropertyTypeEnum'),
		'propertyType',
	),
	propertyUse: createOptionFromOptional(
		createEnumType<PropertyUseEnum>(PropertyUseEnum, 'PropertyUseEnum'),
		'propertyUse',
	),
	propertyValue: createOptionFromOptional(number, 'propertyValue'),
	quoteId: createOptionFromOptional(string, 'quoteId'),
	requestId: createOptionFromOptional(string, 'requestId'),
	selfEmployed: createOptionFromOptional(boolean, 'selfEmployed'),
	stateAbbreviation: createOptionFromOptional(
		createEnumType<StateAbbreviationEnum>(StateAbbreviationEnum, 'StateAbbreviationEnum'),
		'stateAbbreviation',
	),
	streetAddress: createOptionFromOptional(string, 'streetAddress'),
	totalAssets: createOptionFromOptional(number, 'totalAssets'),
	wantsCashOut: createOptionFromOptional(boolean, 'wantsCashOut'),
	vaEligible: createOptionFromOptional(boolean, 'vaEligible'),
	vaFirstTimeUser: createOptionFromOptional(boolean, 'vaFirstTimeUser'),
	vaHasDisability: createOptionFromOptional(boolean, 'vaHasDisability'),
	veteranType: createOptionFromOptional(
		createEnumType<VeteranTypeEnum>(VeteranTypeEnum, 'VeteranTypeEnum'),
		'veteranType',
	),
	yearPurchased: createOptionFromOptional(number, 'yearPurchased'),
	zipCode: createOptionFromOptional(string, 'zipCode'),
});
