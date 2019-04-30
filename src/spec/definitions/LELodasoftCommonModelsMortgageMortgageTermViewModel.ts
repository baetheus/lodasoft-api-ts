import { Option } from 'fp-ts/lib/Option';
import { number, keyof, string, type } from 'io-ts';
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
	mortgageTermId: createOptionFromNullable(number, 'mortgageTermId'),
	mortgageAppliedFor: createOptionFromNullable(
		keyof({ VA: null, FHA: null, Conventional: null, USDARuralHousingService: null, OtherMortgage: null }),
		'mortgageAppliedFor',
	),
	agencyCaseNumber: createOptionFromNullable(string, 'agencyCaseNumber'),
	lenderCaseNumber: createOptionFromNullable(string, 'lenderCaseNumber'),
	amount: createOptionFromNullable(number, 'amount'),
	appraisedValue: createOptionFromNullable(number, 'appraisedValue'),
	interestRate: createOptionFromNullable(number, 'interestRate'),
	noOfMonths: createOptionFromNullable(number, 'noOfMonths'),
	amortizationType: createOptionFromNullable(
		keyof({ FixedRate: null, GEM: null, GPM: null, ARM: null, OtherAmortization: null }),
		'amortizationType',
	),
	lienPosition: createOptionFromNullable(keyof({ FirstLien: null, SecondLien: null, Other: null }), 'lienPosition'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
