import { Option } from 'fp-ts/lib/Option';
import { number, boolean, string, union, literal, type } from 'io-ts';
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
		union([
			literal('USCitizen'),
			literal('PermanentResident'),
			literal('ResidentAlien'),
			literal('UnknownResidencyStatus'),
		]),
	),
	occupyProperty: createOptionFromNullable(boolean),
	havePropertiesOwnership: createOptionFromNullable(boolean),
	typeOfProperty: createOptionFromNullable(
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
	propertyWillBe: createOptionFromNullable(
		union([
			literal('PrimaryResidence'),
			literal('SecondaryResidence'),
			literal('Investment'),
			literal('ShortTermRental'),
		]),
	),
	heldTitleHow: createOptionFromNullable(number),
	fromCreditReport: createOptionFromNullable(boolean),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
