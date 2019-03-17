import { Option } from 'fp-ts/lib/Option';
import { number, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel = {
	currentLoanInfoId: Option<number>;
	applicationId: Option<number>;
	currentUnpaidPrincipalBalance: Option<number>;
	propertyValue: Option<number>;
	currentRate: Option<number>;
	term: Option<number>;
};
export const LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModelIO = type({
	currentLoanInfoId: createOptionFromNullable(number),
	applicationId: createOptionFromNullable(number),
	currentUnpaidPrincipalBalance: createOptionFromNullable(number),
	propertyValue: createOptionFromNullable(number),
	currentRate: createOptionFromNullable(number),
	term: createOptionFromNullable(number),
});
