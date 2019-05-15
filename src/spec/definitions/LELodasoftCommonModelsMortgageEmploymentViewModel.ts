import { Option } from 'fp-ts/lib/Option';
import { array, boolean, number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import {
	LELodasoftCommonModelsMortgageIncomeViewModel,
	LELodasoftCommonModelsMortgageIncomeViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageIncomeViewModel';
import { createEnumType } from '@nll/utils-ts/lib/io';

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
	employmentId: createOptionFromOptional(number, 'employmentId'),
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	addressId: createOptionFromOptional(number, 'addressId'),
	employer: createOptionFromOptional(string, 'employer'),
	employerEmail: createOptionFromOptional(string, 'employerEmail'),
	employerPhone: createOptionFromOptional(string, 'employerPhone'),
	employmentType: createOptionFromOptional(
		createEnumType<EmploymentTypeEnum>(EmploymentTypeEnum, 'EmploymentTypeEnum'),
		'employmentType',
	),
	selfEmployed: createOptionFromOptional(boolean, 'selfEmployed'),
	isPrimary: createOptionFromOptional(boolean, 'isPrimary'),
	position: createOptionFromOptional(string, 'position'),
	startDate: createOptionFromOptional(DateFromISOString, 'startDate'),
	endDate: createOptionFromOptional(DateFromISOString, 'endDate'),
	yearsOnJob: createOptionFromOptional(number, 'yearsOnJob'),
	monthsOnJob: createOptionFromOptional(number, 'monthsOnJob'),
	yearsInLineOfWork: createOptionFromOptional(number, 'yearsInLineOfWork'),
	fromCreditReport: createOptionFromOptional(boolean, 'fromCreditReport'),
	address: createOptionFromOptional(LELodasoftCommonModelsMortgageAddressViewModelIO, 'address'),
	incomes: createOptionFromOptional(array(LELodasoftCommonModelsMortgageIncomeViewModelIO), 'incomes'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
