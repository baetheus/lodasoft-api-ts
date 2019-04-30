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
	referralSource: Option<number>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsConfigurationApplicationViewModelIO = type({
	applicationId: createOptionFromNullable(number, 'applicationId'),
	userId: createOptionFromNullable(string, 'userId'),
	primaryBorrowerId: createOptionFromNullable(number, 'primaryBorrowerId'),
	loanStatusId: createOptionFromNullable(number, 'loanStatusId'),
	loanTypeId: createOptionFromNullable(number, 'loanTypeId'),
	loanPurposeId: createOptionFromNullable(number, 'loanPurposeId'),
	customDataId: createOptionFromNullable(number, 'customDataId'),
	losIdentifier: createOptionFromNullable(string, 'losIdentifier'),
	refNumber: createOptionFromNullable(string, 'refNumber'),
	loanAmount: createOptionFromNullable(number, 'loanAmount'),
	mipAmount: createOptionFromNullable(number, 'mipAmount'),
	cashOutAmount: createOptionFromNullable(number, 'cashOutAmount'),
	subordinateLienAmount: createOptionFromNullable(number, 'subordinateLienAmount'),
	purchasePrice: createOptionFromNullable(number, 'purchasePrice'),
	presentValue: createOptionFromNullable(number, 'presentValue'),
	downAmount: createOptionFromNullable(number, 'downAmount'),
	rate: createOptionFromNullable(number, 'rate'),
	productId: createOptionFromNullable(number, 'productId'),
	lenderId: createOptionFromNullable(number, 'lenderId'),
	term: createOptionFromNullable(number, 'term'),
	estimatedClosingDate: createOptionFromNullable(DateFromISOString, 'estimatedClosingDate'),
	lockExpirationDate: createOptionFromNullable(DateFromISOString, 'lockExpirationDate'),
	cdIssueDate: createOptionFromNullable(DateFromISOString, 'cdIssueDate'),
	cdSignedDate: createOptionFromNullable(DateFromISOString, 'cdSignedDate'),
	originationDate: createOptionFromNullable(DateFromISOString, 'originationDate'),
	mailingStreet: createOptionFromNullable(string, 'mailingStreet'),
	mailingPOBox: createOptionFromNullable(string, 'mailingPOBox'),
	mailingCity: createOptionFromNullable(string, 'mailingCity'),
	mailingState: createOptionFromNullable(string, 'mailingState'),
	mailingZip: createOptionFromNullable(string, 'mailingZip'),
	dateCreate: createOptionFromNullable(DateFromISOString, 'dateCreate'),
	referralSource: createOptionFromNullable(number, 'referralSource'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
