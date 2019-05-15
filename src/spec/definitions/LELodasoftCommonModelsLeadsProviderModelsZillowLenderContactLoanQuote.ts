import { Option } from 'fp-ts/lib/Option';
import { number, boolean, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	rate: createOptionFromOptional(number, 'rate'),
	apr: createOptionFromOptional(number, 'apr'),
	termMonths: createOptionFromOptional(number, 'termMonths'),
	dueInMonths: createOptionFromOptional(number, 'dueInMonths'),
	interestOnlyMonths: createOptionFromOptional(number, 'interestOnlyMonths'),
	lockDays: createOptionFromOptional(number, 'lockDays'),
	hasPrepaymentPenalty: createOptionFromOptional(boolean, 'hasPrepaymentPenalty'),
	jumbo: createOptionFromOptional(boolean, 'jumbo'),
	harp: createOptionFromOptional(boolean, 'harp'),
	lenderPaidMortgageInsurance: createOptionFromOptional(boolean, 'lenderPaidMortgageInsurance'),
	annualMortgageInsurancePercent: createOptionFromOptional(number, 'annualMortgageInsurancePercent'),
	currentBackerMustBeFannieMae: createOptionFromOptional(boolean, 'currentBackerMustBeFannieMae'),
	currentBackerMustBeFreddieMac: createOptionFromOptional(boolean, 'currentBackerMustBeFreddieMac'),
	lenderCredit: createOptionFromOptional(number, 'lenderCredit'),
	lenderCreditPercent: createOptionFromOptional(number, 'lenderCreditPercent'),
	maxAllowedLTV: createOptionFromOptional(number, 'maxAllowedLTV'),
});
