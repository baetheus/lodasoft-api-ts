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
	acceptPrepaymentPenalty: createOptionFromNullable(boolean),
	agentBusinessName: createOptionFromNullable(string),
	agentEmailAddress: createOptionFromNullable(string),
	agentFirstName: createOptionFromNullable(string),
	agentId: createOptionFromNullable(string),
	agentLastName: createOptionFromNullable(string),
	agentPhoneNumber: createOptionFromNullable(string),
	annualIncome: createOptionFromNullable(number),
	banks: createOptionFromNullable(array(string)),
	cashOut: createOptionFromNullable(number),
	city: createOptionFromNullable(string),
	closingTimelineDays: createOptionFromNullable(number),
	coborrowerFirstName: createOptionFromNullable(string),
	coborrowerLastName: createOptionFromNullable(string),
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
	),
	currentBacker: createOptionFromNullable(keyof({ FannieMae: null, FreddieMac: null, FHA: null })),
	currentBalance: createOptionFromNullable(number),
	debtToIncomePercent: createOptionFromNullable(number),
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
	),
	downPayment: createOptionFromNullable(number),
	fhaStreamlineEligible: createOptionFromNullable(boolean),
	firstTimeBuyer: createOptionFromNullable(boolean),
	harpEligible: createOptionFromNullable(boolean),
	hasAgent: createOptionFromNullable(boolean),
	hasBankruptcy: createOptionFromNullable(boolean),
	hasCoborrower: createOptionFromNullable(boolean),
	hasForeclosure: createOptionFromNullable(boolean),
	hasSecondMortgage: createOptionFromNullable(boolean),
	loanAmount: createOptionFromNullable(number),
	loanPurpose: createOptionFromNullable(
		keyof({ Purchase: null, Refinance: null, HomeEquity: null, Construction: null, HELOC: null }),
	),
	loanToValuePercent: createOptionFromNullable(number),
	message: createOptionFromNullable(string),
	monthlyDebts: createOptionFromNullable(number),
	newConstruction: createOptionFromNullable(boolean),
	propertyAddress: createOptionFromNullable(string),
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
	),
	propertyUse: createOptionFromNullable(
		keyof({ Primary: null, SecondaryOrVacation: null, InvestmentOrRental: null }),
	),
	propertyValue: createOptionFromNullable(number),
	quoteId: createOptionFromNullable(string),
	requestId: createOptionFromNullable(string),
	selfEmployed: createOptionFromNullable(boolean),
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
	),
	streetAddress: createOptionFromNullable(string),
	totalAssets: createOptionFromNullable(number),
	wantsCashOut: createOptionFromNullable(boolean),
	vaEligible: createOptionFromNullable(boolean),
	vaFirstTimeUser: createOptionFromNullable(boolean),
	vaHasDisability: createOptionFromNullable(boolean),
	veteranType: createOptionFromNullable(
		keyof({
			RegularMilitary: null,
			Reserves: null,
			NationalGuard: null,
			SpouseOfRegularMilitary: null,
			SpouseOfReserveMilitary: null,
		}),
	),
	yearPurchased: createOptionFromNullable(number),
	zipCode: createOptionFromNullable(string),
});
