import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	losIdentifier: createOptionFromOptional(string, 'losIdentifier'),
	loanNumber: createOptionFromOptional(string, 'loanNumber'),
	borrowerFirstName: createOptionFromOptional(string, 'borrowerFirstName'),
	borrowerLastName: createOptionFromOptional(string, 'borrowerLastName'),
	subjectPropertyAddress: createOptionFromOptional(string, 'subjectPropertyAddress'),
	subjectPropertyCity: createOptionFromOptional(string, 'subjectPropertyCity'),
	subjectPropertyState: createOptionFromOptional(string, 'subjectPropertyState'),
	subjectPropertyZip: createOptionFromOptional(string, 'subjectPropertyZip'),
});
