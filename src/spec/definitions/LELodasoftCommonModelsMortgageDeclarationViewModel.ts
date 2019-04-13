import { Option } from 'fp-ts/lib/Option';
import { number, boolean, string, keyof, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsMortgageDeclarationViewModel = {
	declarationId: Option<number>;
	borrowerId: Option<number>;
	haveJudgement: Option<boolean>;
	haveJudgementInfo: Option<string>;
	declaredBankruptcy: Option<boolean>;
	declaredBankruptcyInfo: Option<string>;
	beenForclosed: Option<boolean>;
	beenForclosedInfo: Option<string>;
	haveLawsuit: Option<boolean>;
	haveLawsuitInfo: Option<string>;
	haveLoanObligation: Option<boolean>;
	haveLoanObligationInfo: Option<string>;
	haveTaxDebt: Option<boolean>;
	haveTaxDebtInfo: Option<string>;
	haveChildSupport: Option<boolean>;
	haveChildSupportInfo: Option<string>;
	borrowedDownPayment: Option<boolean>;
	borrowedDownPaymentInfo: Option<string>;
	coSignedLoan: Option<boolean>;
	coSignedLoanInfo: Option<string>;
	isVeteran: Option<boolean>;
	residenceStatus: Option<'USCitizen' | 'PermanentResident' | 'ResidentAlien' | 'UnknownResidencyStatus'>;
	occupyProperty: Option<boolean>;
	havePropertiesOwnership: Option<boolean>;
	typeOfProperty: Option<
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
	propertyWillBe: Option<'PrimaryResidence' | 'SecondaryResidence' | 'Investment' | 'ShortTermRental'>;
	heldTitleHow: Option<number>;
	fromCreditReport: Option<boolean>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsMortgageDeclarationViewModelIO = type({
	declarationId: createOptionFromNullable(number),
	borrowerId: createOptionFromNullable(number),
	haveJudgement: createOptionFromNullable(boolean),
	haveJudgementInfo: createOptionFromNullable(string),
	declaredBankruptcy: createOptionFromNullable(boolean),
	declaredBankruptcyInfo: createOptionFromNullable(string),
	beenForclosed: createOptionFromNullable(boolean),
	beenForclosedInfo: createOptionFromNullable(string),
	haveLawsuit: createOptionFromNullable(boolean),
	haveLawsuitInfo: createOptionFromNullable(string),
	haveLoanObligation: createOptionFromNullable(boolean),
	haveLoanObligationInfo: createOptionFromNullable(string),
	haveTaxDebt: createOptionFromNullable(boolean),
	haveTaxDebtInfo: createOptionFromNullable(string),
	haveChildSupport: createOptionFromNullable(boolean),
	haveChildSupportInfo: createOptionFromNullable(string),
	borrowedDownPayment: createOptionFromNullable(boolean),
	borrowedDownPaymentInfo: createOptionFromNullable(string),
	coSignedLoan: createOptionFromNullable(boolean),
	coSignedLoanInfo: createOptionFromNullable(string),
	isVeteran: createOptionFromNullable(boolean),
	residenceStatus: createOptionFromNullable(
		keyof({ USCitizen: null, PermanentResident: null, ResidentAlien: null, UnknownResidencyStatus: null }),
	),
	occupyProperty: createOptionFromNullable(boolean),
	havePropertiesOwnership: createOptionFromNullable(boolean),
	typeOfProperty: createOptionFromNullable(
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
	propertyWillBe: createOptionFromNullable(
		keyof({ PrimaryResidence: null, SecondaryResidence: null, Investment: null, ShortTermRental: null }),
	),
	heldTitleHow: createOptionFromNullable(number),
	fromCreditReport: createOptionFromNullable(boolean),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
