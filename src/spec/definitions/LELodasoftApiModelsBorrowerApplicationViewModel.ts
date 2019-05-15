import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsBorrowerApplicationViewModel = {
	companyId: Option<number>;
	applicationId: Option<number>;
	userId: Option<string>;
	borrowerId: Option<number>;
	refNumber: Option<string>;
	borrowerName: Option<string>;
	mailingStreet: Option<string>;
	mailingCity: Option<string>;
	mailingState: Option<string>;
	mailingZip: Option<string>;
	loanAmount: Option<number>;
	loanStatusId: Option<number>;
	loanPurposeId: Option<number>;
	dateCreated: Option<Date>;
};
export const LELodasoftApiModelsBorrowerApplicationViewModelIO = type({
	companyId: createOptionFromOptional(number, 'companyId'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	userId: createOptionFromOptional(string, 'userId'),
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	refNumber: createOptionFromOptional(string, 'refNumber'),
	borrowerName: createOptionFromOptional(string, 'borrowerName'),
	mailingStreet: createOptionFromOptional(string, 'mailingStreet'),
	mailingCity: createOptionFromOptional(string, 'mailingCity'),
	mailingState: createOptionFromOptional(string, 'mailingState'),
	mailingZip: createOptionFromOptional(string, 'mailingZip'),
	loanAmount: createOptionFromOptional(number, 'loanAmount'),
	loanStatusId: createOptionFromOptional(number, 'loanStatusId'),
	loanPurposeId: createOptionFromOptional(number, 'loanPurposeId'),
	dateCreated: createOptionFromOptional(DateFromISOString, 'dateCreated'),
});
