import { Option } from 'fp-ts/lib/Option';
import { number, union, literal, boolean, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsMortgageExpenseViewModel = {
	expenseId: Option<number>;
	borrowerId: Option<number>;
	monthlyAmount: Option<number>;
	expenseType: Option<
		| 'FirstMortgagePrincipalAndInterest'
		| 'HazardInsurance'
		| 'HomeownersInsurance'
		| 'HomeownersAssociationDuesAndCondominiumFees'
		| 'MorgageInsurance'
		| 'OtherHousingExpense'
		| 'OtherMortgageLoanPrincipalAndInterest'
		| 'RealEstateTax'
		| 'Rent'
	>;
	isCurrent: Option<boolean>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsMortgageExpenseViewModelIO = type({
	expenseId: createOptionFromNullable(number),
	borrowerId: createOptionFromNullable(number),
	monthlyAmount: createOptionFromNullable(number),
	expenseType: createOptionFromNullable(
		union([
			literal('FirstMortgagePrincipalAndInterest'),
			literal('HazardInsurance'),
			literal('HomeownersInsurance'),
			literal('HomeownersAssociationDuesAndCondominiumFees'),
			literal('MorgageInsurance'),
			literal('OtherHousingExpense'),
			literal('OtherMortgageLoanPrincipalAndInterest'),
			literal('RealEstateTax'),
			literal('Rent'),
		]),
	),
	isCurrent: createOptionFromNullable(boolean),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
