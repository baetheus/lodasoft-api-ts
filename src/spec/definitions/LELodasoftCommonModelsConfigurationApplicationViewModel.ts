import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	referralSource: Option<number>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsConfigurationApplicationViewModelIO = type({
	applicationId: createOptionFromOptional(number, 'applicationId'),
	userId: createOptionFromOptional(string, 'userId'),
	primaryBorrowerId: createOptionFromOptional(number, 'primaryBorrowerId'),
	loanStatusId: createOptionFromOptional(number, 'loanStatusId'),
	loanTypeId: createOptionFromOptional(number, 'loanTypeId'),
	loanPurposeId: createOptionFromOptional(number, 'loanPurposeId'),
	customDataId: createOptionFromOptional(number, 'customDataId'),
	losIdentifier: createOptionFromOptional(string, 'losIdentifier'),
	refNumber: createOptionFromOptional(string, 'refNumber'),
	loanAmount: createOptionFromOptional(number, 'loanAmount'),
	mipAmount: createOptionFromOptional(number, 'mipAmount'),
	cashOutAmount: createOptionFromOptional(number, 'cashOutAmount'),
	subordinateLienAmount: createOptionFromOptional(number, 'subordinateLienAmount'),
	purchasePrice: createOptionFromOptional(number, 'purchasePrice'),
	presentValue: createOptionFromOptional(number, 'presentValue'),
	downAmount: createOptionFromOptional(number, 'downAmount'),
	rate: createOptionFromOptional(number, 'rate'),
	productId: createOptionFromOptional(number, 'productId'),
	lenderId: createOptionFromOptional(number, 'lenderId'),
	term: createOptionFromOptional(number, 'term'),
	estimatedClosingDate: createOptionFromOptional(DateFromDatelike, 'estimatedClosingDate'),
	lockExpirationDate: createOptionFromOptional(DateFromDatelike, 'lockExpirationDate'),
	cdIssueDate: createOptionFromOptional(DateFromDatelike, 'cdIssueDate'),
	cdSignedDate: createOptionFromOptional(DateFromDatelike, 'cdSignedDate'),
	originationDate: createOptionFromOptional(DateFromDatelike, 'originationDate'),
	mailingStreet: createOptionFromOptional(string, 'mailingStreet'),
	mailingPOBox: createOptionFromOptional(string, 'mailingPOBox'),
	mailingCity: createOptionFromOptional(string, 'mailingCity'),
	mailingState: createOptionFromOptional(string, 'mailingState'),
	mailingZip: createOptionFromOptional(string, 'mailingZip'),
	dateCreate: createOptionFromOptional(DateFromDatelike, 'dateCreate'),
	referralSource: createOptionFromOptional(number, 'referralSource'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromDatelike, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromDatelike, 'dateUpdated'),
});
