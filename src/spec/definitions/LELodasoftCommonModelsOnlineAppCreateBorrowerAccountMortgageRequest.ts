import { Option } from 'fp-ts/lib/Option';
import { string, number, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
	userGuid: createOptionFromOptional(string, 'userGuid'),
	loanPurposeId: createOptionFromOptional(number, 'loanPurposeId'),
	firstName: string,
	lastName: string,
	email: string,
	password: createOptionFromOptional(string, 'password'),
});
