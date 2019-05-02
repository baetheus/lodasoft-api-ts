import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import { createEnumType } from '../utils/utils';

export enum ResidenceStatusEnum {
	'USCitizen',
	'PermanentResident',
	'ResidentAlien',
	'UnknownResidencyStatus',
}

export enum TypeOfPropertyEnum {
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

export enum PropertyWillBeEnum {
	'PrimaryResidence',
	'SecondaryResidence',
	'Investment',
	'ShortTermRental',
}

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
	residenceStatus: Option<ResidenceStatusEnum>;
	occupyProperty: Option<boolean>;
	havePropertiesOwnership: Option<boolean>;
	typeOfProperty: Option<TypeOfPropertyEnum>;
	propertyWillBe: Option<PropertyWillBeEnum>;
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
		createEnumType<ResidenceStatusEnum>(ResidenceStatusEnum, 'ResidenceStatusEnum'),
		'residenceStatus',
	),
	occupyProperty: createOptionFromNullable(boolean, 'occupyProperty'),
	havePropertiesOwnership: createOptionFromNullable(boolean, 'havePropertiesOwnership'),
	typeOfProperty: createOptionFromNullable(
		createEnumType<TypeOfPropertyEnum>(TypeOfPropertyEnum, 'TypeOfPropertyEnum'),
		'typeOfProperty',
	),
	propertyWillBe: createOptionFromNullable(
		createEnumType<PropertyWillBeEnum>(PropertyWillBeEnum, 'PropertyWillBeEnum'),
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
