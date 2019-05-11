import { Option } from 'fp-ts/lib/Option';
import { number, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsLeadsProviderModelsCurrentLoanInfo = {
	unpaidPrincipalBalance: Option<number>;
	estimatedValue: Option<number>;
	interestRate: Option<number>;
	term: Option<number>;
};
export const LELodasoftCommonModelsLeadsProviderModelsCurrentLoanInfoIO = type({
	unpaidPrincipalBalance: createOptionFromOptional(number, 'unpaidPrincipalBalance'),
	estimatedValue: createOptionFromOptional(number, 'estimatedValue'),
	interestRate: createOptionFromOptional(number, 'interestRate'),
	term: createOptionFromOptional(number, 'term'),
});
