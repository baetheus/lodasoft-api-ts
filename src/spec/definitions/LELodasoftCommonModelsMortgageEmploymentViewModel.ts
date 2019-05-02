import { Option } from 'fp-ts/lib/Option';
import { array, boolean, number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import {
	LELodasoftCommonModelsMortgageIncomeViewModel,
	LELodasoftCommonModelsMortgageIncomeViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageIncomeViewModel';
import { createEnumType } from '../utils/utils';

export enum EmploymentTypeEnum {
	'CurrentEmployer',
	'FormerEmployer',
}

export type LELodasoftCommonModelsMortgageEmploymentViewModel = {
	employmentId: Option<number>;
	borrowerId: Option<number>;
	addressId: Option<number>;
	employer: Option<string>;
	employerEmail: Option<string>;
	employerPhone: Option<string>;
	employmentType: Option<EmploymentTypeEnum>;
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
	employmentId: createOptionFromNullable(number, 'employmentId'),
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	addressId: createOptionFromNullable(number, 'addressId'),
	employer: createOptionFromNullable(string, 'employer'),
	employerEmail: createOptionFromNullable(string, 'employerEmail'),
	employerPhone: createOptionFromNullable(string, 'employerPhone'),
	employmentType: createOptionFromNullable(
		createEnumType<EmploymentTypeEnum>(EmploymentTypeEnum, 'EmploymentTypeEnum'),
		'employmentType',
	),
	selfEmployed: createOptionFromNullable(boolean, 'selfEmployed'),
	isPrimary: createOptionFromNullable(boolean, 'isPrimary'),
	position: createOptionFromNullable(string, 'position'),
	startDate: createOptionFromNullable(DateFromISOString, 'startDate'),
	endDate: createOptionFromNullable(DateFromISOString, 'endDate'),
	yearsOnJob: createOptionFromNullable(number, 'yearsOnJob'),
	monthsOnJob: createOptionFromNullable(number, 'monthsOnJob'),
	yearsInLineOfWork: createOptionFromNullable(number, 'yearsInLineOfWork'),
	fromCreditReport: createOptionFromNullable(boolean, 'fromCreditReport'),
	address: createOptionFromNullable(LELodasoftCommonModelsMortgageAddressViewModelIO, 'address'),
	incomes: createOptionFromNullable(array(LELodasoftCommonModelsMortgageIncomeViewModelIO), 'incomes'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
