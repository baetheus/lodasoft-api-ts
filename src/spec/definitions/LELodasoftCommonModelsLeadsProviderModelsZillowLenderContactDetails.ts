import { Option } from 'fp-ts/lib/Option';
import { boolean, string, number, array, keyof, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

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
	creditScoreRange: Option<
		| 'R_760_'
		| 'R_740_759'
		| 'R_720_739'
		| 'R_700_719'
		| 'R_680_699'
		| 'R_660_679'
		| 'R_640_659'
		| 'R_620_639'
		| 'R_600_619'
		| 'R_560_599'
		| 'R_300_559'
	>;
	currentBacker: Option<'FannieMae' | 'FreddieMac' | 'FHA'>;
	currentBalance: Option<number>;
	debtToIncomePercent: Option<number>;
	desiredPrograms: Option<
		Array<
			| 'Fixed30Year'
			| 'Fixed20Year'
			| 'Fixed15Year'
			| 'Fixed10Year'
			| 'ARM3'
			| 'ARM5'
			| 'ARM7'
			| 'HomeEquity30Year'
			| 'HomeEquity30YearDueIn15'
			| 'HomeEquity15Year'
			| 'HELOC20Year'
			| 'HELOC15Year'
			| 'HELOC10Year'
			| 'LowOrNoDown'
			| 'InterestOnly'
		>
	>;
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
	loanPurpose: Option<'Purchase' | 'Refinance' | 'HomeEquity' | 'Construction' | 'HELOC'>;
	loanToValuePercent: Option<number>;
	message: Option<string>;
	monthlyDebts: Option<number>;
	newConstruction: Option<boolean>;
	propertyAddress: Option<string>;
	propertyType: Option<
		| 'SingleFamilyHome'
		| 'TownHouse'
		| 'CondoFourOrFewerStories'
		| 'CondoFiveOrMoreStories'
		| 'Cooperative'
		| 'MobileOrManufactured'
		| 'Modular'
		| 'Leasehold'
	>;
	propertyUse: Option<'Primary' | 'SecondaryOrVacation' | 'InvestmentOrRental'>;
	propertyValue: Option<number>;
	quoteId: Option<string>;
	requestId: Option<string>;
	selfEmployed: Option<boolean>;
	stateAbbreviation: Option<
		| 'AK'
		| 'AL'
		| 'AR'
		| 'AS'
		| 'AZ'
		| 'CA'
		| 'CO'
		| 'CT'
		| 'DC'
		| 'DE'
		| 'FL'
		| 'GA'
		| 'GU'
		| 'HI'
		| 'IA'
		| 'ID'
		| 'IL'
		| 'IN'
		| 'KS'
		| 'KY'
		| 'LA'
		| 'MA'
		| 'MD'
		| 'ME'
		| 'MH'
		| 'MI'
		| 'MN'
		| 'MO'
		| 'MP'
		| 'MS'
		| 'MT'
		| 'NC'
		| 'ND'
		| 'NE'
		| 'NH'
		| 'NJ'
		| 'NM'
		| 'NV'
		| 'NY'
		| 'OH'
		| 'OK'
		| 'OR'
		| 'PA'
		| 'PR'
		| 'RI'
		| 'SC'
		| 'SD'
		| 'TN'
		| 'TX'
		| 'UT'
		| 'VA'
		| 'VI'
		| 'VT'
		| 'WA'
		| 'WI'
		| 'WV'
		| 'WY'
	>;
	streetAddress: Option<string>;
	totalAssets: Option<number>;
	wantsCashOut: Option<boolean>;
	vaEligible: Option<boolean>;
	vaFirstTimeUser: Option<boolean>;
	vaHasDisability: Option<boolean>;
	veteranType: Option<
		'RegularMilitary' | 'Reserves' | 'NationalGuard' | 'SpouseOfRegularMilitary' | 'SpouseOfReserveMilitary'
	>;
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
		keyof({
			R_760_: null,
			R_740_759: null,
			R_720_739: null,
			R_700_719: null,
			R_680_699: null,
			R_660_679: null,
			R_640_659: null,
			R_620_639: null,
			R_600_619: null,
			R_560_599: null,
			R_300_559: null,
		}),
		'creditScoreRange',
	),
	currentBacker: createOptionFromNullable(keyof({ FannieMae: null, FreddieMac: null, FHA: null }), 'currentBacker'),
	currentBalance: createOptionFromNullable(number, 'currentBalance'),
	debtToIncomePercent: createOptionFromNullable(number, 'debtToIncomePercent'),
	desiredPrograms: createOptionFromNullable(
		array(
			keyof({
				Fixed30Year: null,
				Fixed20Year: null,
				Fixed15Year: null,
				Fixed10Year: null,
				ARM3: null,
				ARM5: null,
				ARM7: null,
				HomeEquity30Year: null,
				HomeEquity30YearDueIn15: null,
				HomeEquity15Year: null,
				HELOC20Year: null,
				HELOC15Year: null,
				HELOC10Year: null,
				LowOrNoDown: null,
				InterestOnly: null,
			}),
		),
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
		keyof({ Purchase: null, Refinance: null, HomeEquity: null, Construction: null, HELOC: null }),
		'loanPurpose',
	),
	loanToValuePercent: createOptionFromNullable(number, 'loanToValuePercent'),
	message: createOptionFromNullable(string, 'message'),
	monthlyDebts: createOptionFromNullable(number, 'monthlyDebts'),
	newConstruction: createOptionFromNullable(boolean, 'newConstruction'),
	propertyAddress: createOptionFromNullable(string, 'propertyAddress'),
	propertyType: createOptionFromNullable(
		keyof({
			SingleFamilyHome: null,
			TownHouse: null,
			CondoFourOrFewerStories: null,
			CondoFiveOrMoreStories: null,
			Cooperative: null,
			MobileOrManufactured: null,
			Modular: null,
			Leasehold: null,
		}),
		'propertyType',
	),
	propertyUse: createOptionFromNullable(
		keyof({ Primary: null, SecondaryOrVacation: null, InvestmentOrRental: null }),
		'propertyUse',
	),
	propertyValue: createOptionFromNullable(number, 'propertyValue'),
	quoteId: createOptionFromNullable(string, 'quoteId'),
	requestId: createOptionFromNullable(string, 'requestId'),
	selfEmployed: createOptionFromNullable(boolean, 'selfEmployed'),
	stateAbbreviation: createOptionFromNullable(
		keyof({
			AK: null,
			AL: null,
			AR: null,
			AS: null,
			AZ: null,
			CA: null,
			CO: null,
			CT: null,
			DC: null,
			DE: null,
			FL: null,
			GA: null,
			GU: null,
			HI: null,
			IA: null,
			ID: null,
			IL: null,
			IN: null,
			KS: null,
			KY: null,
			LA: null,
			MA: null,
			MD: null,
			ME: null,
			MH: null,
			MI: null,
			MN: null,
			MO: null,
			MP: null,
			MS: null,
			MT: null,
			NC: null,
			ND: null,
			NE: null,
			NH: null,
			NJ: null,
			NM: null,
			NV: null,
			NY: null,
			OH: null,
			OK: null,
			OR: null,
			PA: null,
			PR: null,
			RI: null,
			SC: null,
			SD: null,
			TN: null,
			TX: null,
			UT: null,
			VA: null,
			VI: null,
			VT: null,
			WA: null,
			WI: null,
			WV: null,
			WY: null,
		}),
		'stateAbbreviation',
	),
	streetAddress: createOptionFromNullable(string, 'streetAddress'),
	totalAssets: createOptionFromNullable(number, 'totalAssets'),
	wantsCashOut: createOptionFromNullable(boolean, 'wantsCashOut'),
	vaEligible: createOptionFromNullable(boolean, 'vaEligible'),
	vaFirstTimeUser: createOptionFromNullable(boolean, 'vaFirstTimeUser'),
	vaHasDisability: createOptionFromNullable(boolean, 'vaHasDisability'),
	veteranType: createOptionFromNullable(
		keyof({
			RegularMilitary: null,
			Reserves: null,
			NationalGuard: null,
			SpouseOfRegularMilitary: null,
			SpouseOfReserveMilitary: null,
		}),
		'veteranType',
	),
	yearPurchased: createOptionFromNullable(number, 'yearPurchased'),
	zipCode: createOptionFromNullable(string, 'zipCode'),
});
