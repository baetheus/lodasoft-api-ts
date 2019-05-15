import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

import { createEnumType } from '@nll/utils-ts/lib/io';

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
	mortgageTermId: createOptionFromOptional(number, 'mortgageTermId'),
	mortgageAppliedFor: createOptionFromOptional(
		createEnumType<MortgageAppliedForEnum>(MortgageAppliedForEnum, 'MortgageAppliedForEnum'),
		'mortgageAppliedFor',
	),
	agencyCaseNumber: createOptionFromOptional(string, 'agencyCaseNumber'),
	lenderCaseNumber: createOptionFromOptional(string, 'lenderCaseNumber'),
	amount: createOptionFromOptional(number, 'amount'),
	appraisedValue: createOptionFromOptional(number, 'appraisedValue'),
	interestRate: createOptionFromOptional(number, 'interestRate'),
	noOfMonths: createOptionFromOptional(number, 'noOfMonths'),
	amortizationType: createOptionFromOptional(
		createEnumType<AmortizationTypeEnum>(AmortizationTypeEnum, 'AmortizationTypeEnum'),
		'amortizationType',
	),
	lienPosition: createOptionFromOptional(
		createEnumType<LienPositionEnum>(LienPositionEnum, 'LienPositionEnum'),
		'lienPosition',
	),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
