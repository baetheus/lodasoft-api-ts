import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

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
	companyId: createOptionFromNullable(number, 'companyId'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	userId: createOptionFromNullable(string, 'userId'),
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	refNumber: createOptionFromNullable(string, 'refNumber'),
	borrowerName: createOptionFromNullable(string, 'borrowerName'),
	mailingStreet: createOptionFromNullable(string, 'mailingStreet'),
	mailingCity: createOptionFromNullable(string, 'mailingCity'),
	mailingState: createOptionFromNullable(string, 'mailingState'),
	mailingZip: createOptionFromNullable(string, 'mailingZip'),
	loanAmount: createOptionFromNullable(number, 'loanAmount'),
	loanStatusId: createOptionFromNullable(number, 'loanStatusId'),
	loanPurposeId: createOptionFromNullable(number, 'loanPurposeId'),
	dateCreated: createOptionFromNullable(DateFromISOString, 'dateCreated'),
});
