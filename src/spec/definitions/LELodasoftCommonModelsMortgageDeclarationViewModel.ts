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
	declarationId: createOptionFromNullable(number, 'declarationId'),
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	haveJudgement: createOptionFromNullable(boolean, 'haveJudgement'),
	haveJudgementInfo: createOptionFromNullable(string, 'haveJudgementInfo'),
	declaredBankruptcy: createOptionFromNullable(boolean, 'declaredBankruptcy'),
	declaredBankruptcyInfo: createOptionFromNullable(string, 'declaredBankruptcyInfo'),
	beenForclosed: createOptionFromNullable(boolean, 'beenForclosed'),
	beenForclosedInfo: createOptionFromNullable(string, 'beenForclosedInfo'),
	haveLawsuit: createOptionFromNullable(boolean, 'haveLawsuit'),
	haveLawsuitInfo: createOptionFromNullable(string, 'haveLawsuitInfo'),
	haveLoanObligation: createOptionFromNullable(boolean, 'haveLoanObligation'),
	haveLoanObligationInfo: createOptionFromNullable(string, 'haveLoanObligationInfo'),
	haveTaxDebt: createOptionFromNullable(boolean, 'haveTaxDebt'),
	haveTaxDebtInfo: createOptionFromNullable(string, 'haveTaxDebtInfo'),
	haveChildSupport: createOptionFromNullable(boolean, 'haveChildSupport'),
	haveChildSupportInfo: createOptionFromNullable(string, 'haveChildSupportInfo'),
	borrowedDownPayment: createOptionFromNullable(boolean, 'borrowedDownPayment'),
	borrowedDownPaymentInfo: createOptionFromNullable(string, 'borrowedDownPaymentInfo'),
	coSignedLoan: createOptionFromNullable(boolean, 'coSignedLoan'),
	coSignedLoanInfo: createOptionFromNullable(string, 'coSignedLoanInfo'),
	isVeteran: createOptionFromNullable(boolean, 'isVeteran'),
	residenceStatus: createOptionFromNullable(
		keyof({ USCitizen: null, PermanentResident: null, ResidentAlien: null, UnknownResidencyStatus: null }),
		'residenceStatus',
	),
	occupyProperty: createOptionFromNullable(boolean, 'occupyProperty'),
	havePropertiesOwnership: createOptionFromNullable(boolean, 'havePropertiesOwnership'),
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
		'typeOfProperty',
	),
	propertyWillBe: createOptionFromNullable(
		keyof({ PrimaryResidence: null, SecondaryResidence: null, Investment: null, ShortTermRental: null }),
		'propertyWillBe',
	),
	heldTitleHow: createOptionFromNullable(number, 'heldTitleHow'),
	fromCreditReport: createOptionFromNullable(boolean, 'fromCreditReport'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
