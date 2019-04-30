import { Option } from 'fp-ts/lib/Option';
import { string, number, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageRequest = {
	companyGuid: string;
	userGuid: Option<string>;
	loanPurposeId: Option<number>;
	firstName: string;
	lastName: string;
	email: string;
	password: Option<string>;
};
export const LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageRequestIO = type({
	companyGuid: string,
	userGuid: createOptionFromNullable(string, 'userGuid'),
	loanPurposeId: createOptionFromNullable(number, 'loanPurposeId'),
	firstName: string,
	lastName: string,
	email: string,
	password: createOptionFromNullable(string, 'password'),
});
