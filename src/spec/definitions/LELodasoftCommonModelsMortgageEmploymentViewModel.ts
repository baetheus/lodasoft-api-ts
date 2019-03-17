import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import {
	LELodasoftCommonModelsMortgageIncomeViewModel,
	LELodasoftCommonModelsMortgageIncomeViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageIncomeViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, union, literal, boolean, array, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsMortgageEmploymentViewModel = {
	employmentId: Option<number>;
	borrowerId: Option<number>;
	addressId: Option<number>;
	employer: Option<string>;
	employerEmail: Option<string>;
	employerPhone: Option<string>;
	employmentType: Option<'CurrentEmployer' | 'FormerEmployer'>;
	selfEmployed: Option<boolean>;
	isPrimary: Option<boolean>;
	position: Option<string>;
	startDate: Option<Date>;
	endDate: Option<Date>;
	yearsOnJob: Option<number>;
	monthsOnJob: Option<number>;
	yearsInLineOfWork: Option<number>;
	fromCreditReport: Option<boolean>;
	address: Option<LELodasoftCommonModelsMortgageAddressViewModel>;
	incomes: Option<Array<LELodasoftCommonModelsMortgageIncomeViewModel>>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsMortgageEmploymentViewModelIO = type({
	employmentId: createOptionFromNullable(number),
	borrowerId: createOptionFromNullable(number),
	addressId: createOptionFromNullable(number),
	employer: createOptionFromNullable(string),
	employerEmail: createOptionFromNullable(string),
	employerPhone: createOptionFromNullable(string),
	employmentType: createOptionFromNullable(union([literal('CurrentEmployer'), literal('FormerEmployer')])),
	selfEmployed: createOptionFromNullable(boolean),
	isPrimary: createOptionFromNullable(boolean),
	position: createOptionFromNullable(string),
	startDate: createOptionFromNullable(DateFromISOString),
	endDate: createOptionFromNullable(DateFromISOString),
	yearsOnJob: createOptionFromNullable(number),
	monthsOnJob: createOptionFromNullable(number),
	yearsInLineOfWork: createOptionFromNullable(number),
	fromCreditReport: createOptionFromNullable(boolean),
	address: createOptionFromNullable(LELodasoftCommonModelsMortgageAddressViewModelIO),
	incomes: createOptionFromNullable(array(LELodasoftCommonModelsMortgageIncomeViewModelIO)),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
