import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

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
	incomeId: createOptionFromNullable(number, 'incomeId'),
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	employmentId: createOptionFromNullable(number, 'employmentId'),
	reoId: createOptionFromNullable(number, 'reoId'),
	monthlyIncome: createOptionFromNullable(number, 'monthlyIncome'),
	typeOfIncome: createOptionFromNullable(
		createEnumType<TypeOfIncomeEnum>(TypeOfIncomeEnum, 'TypeOfIncomeEnum'),
		'typeOfIncome',
	),
	categoryOfIncome: createOptionFromNullable(
		createEnumType<CategoryOfIncomeEnum>(CategoryOfIncomeEnum, 'CategoryOfIncomeEnum'),
		'categoryOfIncome',
	),
	fromCreditReport: createOptionFromNullable(boolean, 'fromCreditReport'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
