import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftThirdPartyLosSearchResponseItem = {
	losIdentifier: Option<string>;
	loanNumber: Option<string>;
	borrowerFirstName: Option<string>;
	borrowerLastName: Option<string>;
	subjectPropertyAddress: Option<string>;
	subjectPropertyCity: Option<string>;
	subjectPropertyState: Option<string>;
	subjectPropertyZip: Option<string>;
};
export const LELodasoftThirdPartyLosSearchResponseItemIO = type({
	losIdentifier: createOptionFromNullable(string),
	loanNumber: createOptionFromNullable(string),
	borrowerFirstName: createOptionFromNullable(string),
	borrowerLastName: createOptionFromNullable(string),
	subjectPropertyAddress: createOptionFromNullable(string),
	subjectPropertyCity: createOptionFromNullable(string),
	subjectPropertyState: createOptionFromNullable(string),
	subjectPropertyZip: createOptionFromNullable(string),
});
