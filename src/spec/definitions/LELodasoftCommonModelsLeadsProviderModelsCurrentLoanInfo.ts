import { Option } from 'fp-ts/lib/Option';
import { number, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsLeadsProviderModelsCurrentLoanInfo = {
	unpaidPrincipalBalance: Option<number>;
	estimatedValue: Option<number>;
	interestRate: Option<number>;
	term: Option<number>;
};
export const LELodasoftCommonModelsLeadsProviderModelsCurrentLoanInfoIO = type({
	unpaidPrincipalBalance: createOptionFromNullable(number, 'unpaidPrincipalBalance'),
	estimatedValue: createOptionFromNullable(number, 'estimatedValue'),
	interestRate: createOptionFromNullable(number, 'interestRate'),
	term: createOptionFromNullable(number, 'term'),
});
