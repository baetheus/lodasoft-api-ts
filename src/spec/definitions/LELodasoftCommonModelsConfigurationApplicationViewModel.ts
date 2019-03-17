import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsConfigurationApplicationViewModel = {
	applicationId: Option<number>;
	userId: Option<string>;
	primaryBorrowerId: Option<number>;
	loanStatusId: Option<number>;
	loanTypeId: Option<number>;
	loanPurposeId: Option<number>;
	customDataId: Option<number>;
	losIdentifier: Option<string>;
	refNumber: Option<string>;
	loanAmount: Option<number>;
	mipAmount: Option<number>;
	cashOutAmount: Option<number>;
	subordinateLienAmount: Option<number>;
	purchasePrice: Option<number>;
	presentValue: Option<number>;
	downAmount: Option<number>;
	rate: Option<number>;
	productId: Option<number>;
	lenderId: Option<number>;
	term: Option<number>;
	estimatedClosingDate: Option<Date>;
	lockExpirationDate: Option<Date>;
	cdIssueDate: Option<Date>;
	cdSignedDate: Option<Date>;
	originationDate: Option<Date>;
	mailingStreet: Option<string>;
	mailingPOBox: Option<string>;
	mailingCity: Option<string>;
	mailingState: Option<string>;
	mailingZip: Option<string>;
	dateCreate: Option<Date>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsConfigurationApplicationViewModelIO = type({
	applicationId: createOptionFromNullable(number),
	userId: createOptionFromNullable(string),
	primaryBorrowerId: createOptionFromNullable(number),
	loanStatusId: createOptionFromNullable(number),
	loanTypeId: createOptionFromNullable(number),
	loanPurposeId: createOptionFromNullable(number),
	customDataId: createOptionFromNullable(number),
	losIdentifier: createOptionFromNullable(string),
	refNumber: createOptionFromNullable(string),
	loanAmount: createOptionFromNullable(number),
	mipAmount: createOptionFromNullable(number),
	cashOutAmount: createOptionFromNullable(number),
	subordinateLienAmount: createOptionFromNullable(number),
	purchasePrice: createOptionFromNullable(number),
	presentValue: createOptionFromNullable(number),
	downAmount: createOptionFromNullable(number),
	rate: createOptionFromNullable(number),
	productId: createOptionFromNullable(number),
	lenderId: createOptionFromNullable(number),
	term: createOptionFromNullable(number),
	estimatedClosingDate: createOptionFromNullable(DateFromISOString),
	lockExpirationDate: createOptionFromNullable(DateFromISOString),
	cdIssueDate: createOptionFromNullable(DateFromISOString),
	cdSignedDate: createOptionFromNullable(DateFromISOString),
	originationDate: createOptionFromNullable(DateFromISOString),
	mailingStreet: createOptionFromNullable(string),
	mailingPOBox: createOptionFromNullable(string),
	mailingCity: createOptionFromNullable(string),
	mailingState: createOptionFromNullable(string),
	mailingZip: createOptionFromNullable(string),
	dateCreate: createOptionFromNullable(DateFromISOString),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
