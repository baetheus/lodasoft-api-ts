import { Option } from 'fp-ts/lib/Option';
import { number, keyof, boolean, string, type } from 'io-ts';
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
	expenseId: createOptionFromNullable(number, 'expenseId'),
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	monthlyAmount: createOptionFromNullable(number, 'monthlyAmount'),
	expenseType: createOptionFromNullable(
		keyof({
			FirstMortgagePrincipalAndInterest: null,
			HazardInsurance: null,
			HomeownersInsurance: null,
			HomeownersAssociationDuesAndCondominiumFees: null,
			MorgageInsurance: null,
			OtherHousingExpense: null,
			OtherMortgageLoanPrincipalAndInterest: null,
			RealEstateTax: null,
			Rent: null,
		}),
		'expenseType',
	),
	isCurrent: createOptionFromNullable(boolean, 'isCurrent'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
