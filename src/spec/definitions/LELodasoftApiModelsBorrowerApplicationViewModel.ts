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
	companyId: createOptionFromNullable(number),
	applicationId: createOptionFromNullable(number),
	userId: createOptionFromNullable(string),
	borrowerId: createOptionFromNullable(number),
	refNumber: createOptionFromNullable(string),
	borrowerName: createOptionFromNullable(string),
	mailingStreet: createOptionFromNullable(string),
	mailingCity: createOptionFromNullable(string),
	mailingState: createOptionFromNullable(string),
	mailingZip: createOptionFromNullable(string),
	loanAmount: createOptionFromNullable(number),
	loanStatusId: createOptionFromNullable(number),
	loanPurposeId: createOptionFromNullable(number),
	dateCreated: createOptionFromNullable(DateFromISOString),
});
