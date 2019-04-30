import {
	LELodasoftCommonModelsMortgageEmploymentViewModel,
	LELodasoftCommonModelsMortgageEmploymentViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageEmploymentViewModel';
import {
	LELodasoftCommonModelsMortgageReoViewModel,
	LELodasoftCommonModelsMortgageReoViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageReoViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, keyof, boolean, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsMortgageIncomeViewModel = {
	incomeId: Option<number>;
	borrowerId: Option<number>;
	employmentId: Option<number>;
	employmentModel: Option<LELodasoftCommonModelsMortgageEmploymentViewModel>;
	reoId: Option<number>;
	reoModel: Option<LELodasoftCommonModelsMortgageReoViewModel>;
	monthlyIncome: Option<number>;
	typeOfIncome: Option<
		| 'AlimonyChildSupport'
		| 'AutomobileExpenseAccount'
		| 'Base'
		| 'Bonus'
		| 'Commissions'
		| 'DividendsInterest'
		| 'EmploymentIncome'
		| 'FosterCare'
		| 'NetRentalIncome'
		| 'NotesReceivableInstallment'
		| 'OtherTypesOfIncome'
		| 'Overtime'
		| 'Pension'
		| 'SocialSecurity'
		| 'SubjectPropertyNetCashFlow'
		| 'Trust'
		| 'Unemployment'
		| 'PublicAssistance'
		| 'VABenefitsNonEducational'
		| 'MortgageDifferential'
		| 'MilitaryBasePay'
		| 'MilitaryRationsAllowance'
		| 'MilitaryFlightPay'
		| 'MilitaryHazardPay'
		| 'MilitaryClothesAllowance'
		| 'MilitaryQuartersAllowance'
		| 'MilitaryPropPay'
		| 'MilitaryOverseasPay'
		| 'MilitaryCombatPay'
		| 'MilitaryVariableHousingAllowance'
		| 'SelfEmployment'
		| 'IndependentContractor'
	>;
	categoryOfIncome: Option<
		| 'Employment'
		| 'IndependentContractor'
		| 'MilitaryPay'
		| 'Rental'
		| 'SocialSecurity'
		| 'Pension'
		| 'BuisnessSelfEmployment'
		| 'Other'
	>;
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
	employmentModel: createOptionFromNullable(LELodasoftCommonModelsMortgageEmploymentViewModelIO, 'employmentModel'),
	reoId: createOptionFromNullable(number, 'reoId'),
	reoModel: createOptionFromNullable(LELodasoftCommonModelsMortgageReoViewModelIO, 'reoModel'),
	monthlyIncome: createOptionFromNullable(number, 'monthlyIncome'),
	typeOfIncome: createOptionFromNullable(
		keyof({
			AlimonyChildSupport: null,
			AutomobileExpenseAccount: null,
			Base: null,
			Bonus: null,
			Commissions: null,
			DividendsInterest: null,
			EmploymentIncome: null,
			FosterCare: null,
			NetRentalIncome: null,
			NotesReceivableInstallment: null,
			OtherTypesOfIncome: null,
			Overtime: null,
			Pension: null,
			SocialSecurity: null,
			SubjectPropertyNetCashFlow: null,
			Trust: null,
			Unemployment: null,
			PublicAssistance: null,
			VABenefitsNonEducational: null,
			MortgageDifferential: null,
			MilitaryBasePay: null,
			MilitaryRationsAllowance: null,
			MilitaryFlightPay: null,
			MilitaryHazardPay: null,
			MilitaryClothesAllowance: null,
			MilitaryQuartersAllowance: null,
			MilitaryPropPay: null,
			MilitaryOverseasPay: null,
			MilitaryCombatPay: null,
			MilitaryVariableHousingAllowance: null,
			SelfEmployment: null,
			IndependentContractor: null,
		}),
		'typeOfIncome',
	),
	categoryOfIncome: createOptionFromNullable(
		keyof({
			Employment: null,
			IndependentContractor: null,
			MilitaryPay: null,
			Rental: null,
			SocialSecurity: null,
			Pension: null,
			BuisnessSelfEmployment: null,
			Other: null,
		}),
		'categoryOfIncome',
	),
	fromCreditReport: createOptionFromNullable(boolean, 'fromCreditReport'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
