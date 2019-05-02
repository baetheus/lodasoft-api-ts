import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import { createEnumType } from '../utils/utils';

export enum MortgageAppliedForEnum {
	'VA',
	'FHA',
	'Conventional',
	'USDARuralHousingService',
	'OtherMortgage',
}

export enum AmortizationTypeEnum {
	'FixedRate',
	'GEM',
	'GPM',
	'ARM',
	'OtherAmortization',
}

export enum LienPositionEnum {
	'FirstLien',
	'SecondLien',
	'Other',
}

export type LELodasoftCommonModelsMortgageMortgageTermViewModel = {
	mortgageTermId: Option<number>;
	mortgageAppliedFor: Option<MortgageAppliedForEnum>;
	agencyCaseNumber: Option<string>;
	lenderCaseNumber: Option<string>;
	amount: Option<number>;
	appraisedValue: Option<number>;
	interestRate: Option<number>;
	noOfMonths: Option<number>;
	amortizationType: Option<AmortizationTypeEnum>;
	lienPosition: Option<LienPositionEnum>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsMortgageMortgageTermViewModelIO = type({
	mortgageTermId: createOptionFromNullable(number, 'mortgageTermId'),
	mortgageAppliedFor: createOptionFromNullable(
		createEnumType<MortgageAppliedForEnum>(MortgageAppliedForEnum, 'MortgageAppliedForEnum'),
		'mortgageAppliedFor',
	),
	agencyCaseNumber: createOptionFromNullable(string, 'agencyCaseNumber'),
	lenderCaseNumber: createOptionFromNullable(string, 'lenderCaseNumber'),
	amount: createOptionFromNullable(number, 'amount'),
	appraisedValue: createOptionFromNullable(number, 'appraisedValue'),
	interestRate: createOptionFromNullable(number, 'interestRate'),
	noOfMonths: createOptionFromNullable(number, 'noOfMonths'),
	amortizationType: createOptionFromNullable(
		createEnumType<AmortizationTypeEnum>(AmortizationTypeEnum, 'AmortizationTypeEnum'),
		'amortizationType',
	),
	lienPosition: createOptionFromNullable(
		createEnumType<LienPositionEnum>(LienPositionEnum, 'LienPositionEnum'),
		'lienPosition',
	),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
