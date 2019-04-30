import { Option } from 'fp-ts/lib/Option';
import { number, boolean, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactLoanQuote = {
	rate: Option<number>;
	apr: Option<number>;
	termMonths: Option<number>;
	dueInMonths: Option<number>;
	interestOnlyMonths: Option<number>;
	lockDays: Option<number>;
	hasPrepaymentPenalty: Option<boolean>;
	jumbo: Option<boolean>;
	harp: Option<boolean>;
	lenderPaidMortgageInsurance: Option<boolean>;
	annualMortgageInsurancePercent: Option<number>;
	currentBackerMustBeFannieMae: Option<boolean>;
	currentBackerMustBeFreddieMac: Option<boolean>;
	lenderCredit: Option<number>;
	lenderCreditPercent: Option<number>;
	maxAllowedLTV: Option<number>;
};
export const LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactLoanQuoteIO = type({
	rate: createOptionFromNullable(number, 'rate'),
	apr: createOptionFromNullable(number, 'apr'),
	termMonths: createOptionFromNullable(number, 'termMonths'),
	dueInMonths: createOptionFromNullable(number, 'dueInMonths'),
	interestOnlyMonths: createOptionFromNullable(number, 'interestOnlyMonths'),
	lockDays: createOptionFromNullable(number, 'lockDays'),
	hasPrepaymentPenalty: createOptionFromNullable(boolean, 'hasPrepaymentPenalty'),
	jumbo: createOptionFromNullable(boolean, 'jumbo'),
	harp: createOptionFromNullable(boolean, 'harp'),
	lenderPaidMortgageInsurance: createOptionFromNullable(boolean, 'lenderPaidMortgageInsurance'),
	annualMortgageInsurancePercent: createOptionFromNullable(number, 'annualMortgageInsurancePercent'),
	currentBackerMustBeFannieMae: createOptionFromNullable(boolean, 'currentBackerMustBeFannieMae'),
	currentBackerMustBeFreddieMac: createOptionFromNullable(boolean, 'currentBackerMustBeFreddieMac'),
	lenderCredit: createOptionFromNullable(number, 'lenderCredit'),
	lenderCreditPercent: createOptionFromNullable(number, 'lenderCreditPercent'),
	maxAllowedLTV: createOptionFromNullable(number, 'maxAllowedLTV'),
});
