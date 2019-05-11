import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
	declarationId: createOptionFromOptional(number, 'declarationId'),
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	haveJudgement: createOptionFromOptional(boolean, 'haveJudgement'),
	haveJudgementInfo: createOptionFromOptional(string, 'haveJudgementInfo'),
	declaredBankruptcy: createOptionFromOptional(boolean, 'declaredBankruptcy'),
	declaredBankruptcyInfo: createOptionFromOptional(string, 'declaredBankruptcyInfo'),
	beenForclosed: createOptionFromOptional(boolean, 'beenForclosed'),
	beenForclosedInfo: createOptionFromOptional(string, 'beenForclosedInfo'),
	haveLawsuit: createOptionFromOptional(boolean, 'haveLawsuit'),
	haveLawsuitInfo: createOptionFromOptional(string, 'haveLawsuitInfo'),
	haveLoanObligation: createOptionFromOptional(boolean, 'haveLoanObligation'),
	haveLoanObligationInfo: createOptionFromOptional(string, 'haveLoanObligationInfo'),
	haveTaxDebt: createOptionFromOptional(boolean, 'haveTaxDebt'),
	haveTaxDebtInfo: createOptionFromOptional(string, 'haveTaxDebtInfo'),
	haveChildSupport: createOptionFromOptional(boolean, 'haveChildSupport'),
	haveChildSupportInfo: createOptionFromOptional(string, 'haveChildSupportInfo'),
	borrowedDownPayment: createOptionFromOptional(boolean, 'borrowedDownPayment'),
	borrowedDownPaymentInfo: createOptionFromOptional(string, 'borrowedDownPaymentInfo'),
	coSignedLoan: createOptionFromOptional(boolean, 'coSignedLoan'),
	coSignedLoanInfo: createOptionFromOptional(string, 'coSignedLoanInfo'),
	isVeteran: createOptionFromOptional(boolean, 'isVeteran'),
	residenceStatus: createOptionFromOptional(
		createEnumType<ResidenceStatusEnum>(ResidenceStatusEnum, 'ResidenceStatusEnum'),
		'residenceStatus',
	),
	occupyProperty: createOptionFromOptional(boolean, 'occupyProperty'),
	havePropertiesOwnership: createOptionFromOptional(boolean, 'havePropertiesOwnership'),
	typeOfProperty: createOptionFromOptional(
		createEnumType<TypeOfPropertyEnum>(TypeOfPropertyEnum, 'TypeOfPropertyEnum'),
		'typeOfProperty',
	),
	propertyWillBe: createOptionFromOptional(
		createEnumType<PropertyWillBeEnum>(PropertyWillBeEnum, 'PropertyWillBeEnum'),
		'propertyWillBe',
	),
	heldTitleHow: createOptionFromOptional(number, 'heldTitleHow'),
	fromCreditReport: createOptionFromOptional(boolean, 'fromCreditReport'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
