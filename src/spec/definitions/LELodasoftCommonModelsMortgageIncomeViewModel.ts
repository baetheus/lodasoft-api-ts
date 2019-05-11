import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

import { createEnumType } from '../utils/utils';

export enum TypeOfIncomeEnum {
	'AlimonyChildSupport',
	'AutomobileExpenseAccount',
	'Base',
	'Bonus',
	'Commissions',
	'DividendsInterest',
	'EmploymentIncome',
	'FosterCare',
	'NetRentalIncome',
	'NotesReceivableInstallment',
	'OtherTypesOfIncome',
	'Overtime',
	'Pension',
	'SocialSecurity',
	'SubjectPropertyNetCashFlow',
	'Trust',
	'Unemployment',
	'PublicAssistance',
	'VABenefitsNonEducational',
	'MortgageDifferential',
	'MilitaryBasePay',
	'MilitaryRationsAllowance',
	'MilitaryFlightPay',
	'MilitaryHazardPay',
	'MilitaryClothesAllowance',
	'MilitaryQuartersAllowance',
	'MilitaryPropPay',
	'MilitaryOverseasPay',
	'MilitaryCombatPay',
	'MilitaryVariableHousingAllowance',
	'SelfEmployment',
	'IndependentContractor',
}

export enum CategoryOfIncomeEnum {
	'Employment',
	'IndependentContractor',
	'MilitaryPay',
	'Rental',
	'SocialSecurity',
	'Pension',
	'BuisnessSelfEmployment',
	'Other',
}

export type LELodasoftCommonModelsMortgageIncomeViewModel = {
	incomeId: Option<number>;
	borrowerId: Option<number>;
	employmentId: Option<number>;
	reoId: Option<number>;
	monthlyIncome: Option<number>;
	typeOfIncome: Option<TypeOfIncomeEnum>;
	categoryOfIncome: Option<CategoryOfIncomeEnum>;
	fromCreditReport: Option<boolean>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsMortgageIncomeViewModelIO = type({
	incomeId: createOptionFromOptional(number, 'incomeId'),
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	employmentId: createOptionFromOptional(number, 'employmentId'),
	reoId: createOptionFromOptional(number, 'reoId'),
	monthlyIncome: createOptionFromOptional(number, 'monthlyIncome'),
	typeOfIncome: createOptionFromOptional(
		createEnumType<TypeOfIncomeEnum>(TypeOfIncomeEnum, 'TypeOfIncomeEnum'),
		'typeOfIncome',
	),
	categoryOfIncome: createOptionFromOptional(
		createEnumType<CategoryOfIncomeEnum>(CategoryOfIncomeEnum, 'CategoryOfIncomeEnum'),
		'categoryOfIncome',
	),
	fromCreditReport: createOptionFromOptional(boolean, 'fromCreditReport'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
