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
	losIdentifier: createOptionFromNullable(string, 'losIdentifier'),
	loanNumber: createOptionFromNullable(string, 'loanNumber'),
	borrowerFirstName: createOptionFromNullable(string, 'borrowerFirstName'),
	borrowerLastName: createOptionFromNullable(string, 'borrowerLastName'),
	subjectPropertyAddress: createOptionFromNullable(string, 'subjectPropertyAddress'),
	subjectPropertyCity: createOptionFromNullable(string, 'subjectPropertyCity'),
	subjectPropertyState: createOptionFromNullable(string, 'subjectPropertyState'),
	subjectPropertyZip: createOptionFromNullable(string, 'subjectPropertyZip'),
});
