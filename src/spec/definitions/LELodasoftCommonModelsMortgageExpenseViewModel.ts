import { createEnumType } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';
import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';

export enum ExpenseTypeEnum {
	'FirstMortgagePrincipalAndInterest',
	'HazardInsurance',
	'HomeownersInsurance',
	'HomeownersAssociationDuesAndCondominiumFees',
	'MorgageInsurance',
	'OtherHousingExpense',
	'OtherMortgageLoanPrincipalAndInterest',
	'RealEstateTax',
	'Rent',
}

export type LELodasoftCommonModelsMortgageExpenseViewModel = {
	expenseId: Option<number>;
	borrowerId: Option<number>;
	monthlyAmount: Option<number>;
	expenseType: Option<ExpenseTypeEnum>;
	isCurrent: Option<boolean>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsMortgageExpenseViewModelIO = type({
	expenseId: createOptionFromOptional(number, 'expenseId'),
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	monthlyAmount: createOptionFromOptional(number, 'monthlyAmount'),
	expenseType: createOptionFromOptional(
		createEnumType<ExpenseTypeEnum>(ExpenseTypeEnum, 'ExpenseTypeEnum'),
		'expenseType',
	),
	isCurrent: createOptionFromOptional(boolean, 'isCurrent'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
