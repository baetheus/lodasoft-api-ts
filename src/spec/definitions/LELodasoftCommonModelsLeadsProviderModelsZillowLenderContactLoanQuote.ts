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
	rate: createOptionFromNullable(number),
	apr: createOptionFromNullable(number),
	termMonths: createOptionFromNullable(number),
	dueInMonths: createOptionFromNullable(number),
	interestOnlyMonths: createOptionFromNullable(number),
	lockDays: createOptionFromNullable(number),
	hasPrepaymentPenalty: createOptionFromNullable(boolean),
	jumbo: createOptionFromNullable(boolean),
	harp: createOptionFromNullable(boolean),
	lenderPaidMortgageInsurance: createOptionFromNullable(boolean),
	annualMortgageInsurancePercent: createOptionFromNullable(number),
	currentBackerMustBeFannieMae: createOptionFromNullable(boolean),
	currentBackerMustBeFreddieMac: createOptionFromNullable(boolean),
	lenderCredit: createOptionFromNullable(number),
	lenderCreditPercent: createOptionFromNullable(number),
	maxAllowedLTV: createOptionFromNullable(number),
});
