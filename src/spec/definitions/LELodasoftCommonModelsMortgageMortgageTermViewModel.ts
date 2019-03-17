import { Option } from 'fp-ts/lib/Option';
import { number, union, literal, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsMortgageMortgageTermViewModel = {
	mortgageTermId: Option<number>;
	mortgageAppliedFor: Option<'VA' | 'FHA' | 'Conventional' | 'USDARuralHousingService' | 'OtherMortgage'>;
	agencyCaseNumber: Option<string>;
	lenderCaseNumber: Option<string>;
	amount: Option<number>;
	appraisedValue: Option<number>;
	interestRate: Option<number>;
	noOfMonths: Option<number>;
	amortizationType: Option<'FixedRate' | 'GEM' | 'GPM' | 'ARM' | 'OtherAmortization'>;
	lienPosition: Option<'FirstLien' | 'SecondLien' | 'Other'>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsMortgageMortgageTermViewModelIO = type({
	mortgageTermId: createOptionFromNullable(number),
	mortgageAppliedFor: createOptionFromNullable(
		union([
			literal('VA'),
			literal('FHA'),
			literal('Conventional'),
			literal('USDARuralHousingService'),
			literal('OtherMortgage'),
		]),
	),
	agencyCaseNumber: createOptionFromNullable(string),
	lenderCaseNumber: createOptionFromNullable(string),
	amount: createOptionFromNullable(number),
	appraisedValue: createOptionFromNullable(number),
	interestRate: createOptionFromNullable(number),
	noOfMonths: createOptionFromNullable(number),
	amortizationType: createOptionFromNullable(
		union([literal('FixedRate'), literal('GEM'), literal('GPM'), literal('ARM'), literal('OtherAmortization')]),
	),
	lienPosition: createOptionFromNullable(union([literal('FirstLien'), literal('SecondLien'), literal('Other')])),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
