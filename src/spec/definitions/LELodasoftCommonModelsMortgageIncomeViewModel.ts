import {
	LELodasoftCommonModelsMortgageEmploymentViewModel,
	LELodasoftCommonModelsMortgageEmploymentViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageEmploymentViewModel';
import {
	LELodasoftCommonModelsMortgageReoViewModel,
	LELodasoftCommonModelsMortgageReoViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageReoViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, union, literal, boolean, string, type } from 'io-ts';
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
	incomeId: createOptionFromNullable(number),
	borrowerId: createOptionFromNullable(number),
	employmentId: createOptionFromNullable(number),
	employmentModel: createOptionFromNullable(LELodasoftCommonModelsMortgageEmploymentViewModelIO),
	reoId: createOptionFromNullable(number),
	reoModel: createOptionFromNullable(LELodasoftCommonModelsMortgageReoViewModelIO),
	monthlyIncome: createOptionFromNullable(number),
	typeOfIncome: createOptionFromNullable(
		union([
			literal('AlimonyChildSupport'),
			literal('AutomobileExpenseAccount'),
			literal('Base'),
			literal('Bonus'),
			literal('Commissions'),
			literal('DividendsInterest'),
			literal('EmploymentIncome'),
			literal('FosterCare'),
			literal('NetRentalIncome'),
			literal('NotesReceivableInstallment'),
			literal('OtherTypesOfIncome'),
			literal('Overtime'),
			literal('Pension'),
			literal('SocialSecurity'),
			literal('SubjectPropertyNetCashFlow'),
			literal('Trust'),
			literal('Unemployment'),
			literal('PublicAssistance'),
			literal('VABenefitsNonEducational'),
			literal('MortgageDifferential'),
			literal('MilitaryBasePay'),
			literal('MilitaryRationsAllowance'),
			literal('MilitaryFlightPay'),
			literal('MilitaryHazardPay'),
			literal('MilitaryClothesAllowance'),
			literal('MilitaryQuartersAllowance'),
			literal('MilitaryPropPay'),
			literal('MilitaryOverseasPay'),
			literal('MilitaryCombatPay'),
			literal('MilitaryVariableHousingAllowance'),
			literal('SelfEmployment'),
			literal('IndependentContractor'),
		]),
	),
	categoryOfIncome: createOptionFromNullable(
		union([
			literal('Employment'),
			literal('IndependentContractor'),
			literal('MilitaryPay'),
			literal('Rental'),
			literal('SocialSecurity'),
			literal('Pension'),
			literal('BuisnessSelfEmployment'),
			literal('Other'),
		]),
	),
	fromCreditReport: createOptionFromNullable(boolean),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
