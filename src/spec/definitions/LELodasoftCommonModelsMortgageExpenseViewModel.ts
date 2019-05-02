import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import { createEnumType } from '../utils/utils';

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
	expenseId: createOptionFromNullable(number, 'expenseId'),
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	monthlyAmount: createOptionFromNullable(number, 'monthlyAmount'),
	expenseType: createOptionFromNullable(
		createEnumType<ExpenseTypeEnum>(ExpenseTypeEnum, 'ExpenseTypeEnum'),
		'expenseType',
	),
	isCurrent: createOptionFromNullable(boolean, 'isCurrent'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
