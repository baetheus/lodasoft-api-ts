import { Option } from 'fp-ts/lib/Option';
import { number, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel = {
	currentLoanInfoId: Option<number>;
	applicationId: Option<number>;
	currentUnpaidPrincipalBalance: Option<number>;
	propertyValue: Option<number>;
	currentRate: Option<number>;
	term: Option<number>;
};
export const LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModelIO = type({
	currentLoanInfoId: createOptionFromOptional(number, 'currentLoanInfoId'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	currentUnpaidPrincipalBalance: createOptionFromOptional(number, 'currentUnpaidPrincipalBalance'),
	propertyValue: createOptionFromOptional(number, 'propertyValue'),
	currentRate: createOptionFromOptional(number, 'currentRate'),
	term: createOptionFromOptional(number, 'term'),
});
