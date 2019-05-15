import { createEnumType } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';
import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';

export enum LosVendorEnum {
	'Encompass',
	'LendingQb',
}

export type LELodasoftDataAccessDbModelsAdminApplicationModel = {
	applicationId: Option<number>;
	userId: Option<string>;
	primaryBorrowerId: Option<number>;
	loanStatusId: Option<number>;
	loanTypeId: Option<number>;
	loanPurposeId: Option<number>;
	customDataId: Option<number>;
	refNumber: Option<string>;
	losIdentifier: Option<string>;
	thirdPartyCredentialProviderId: Option<number>;
	losVendor: Option<LosVendorEnum>;
	loanAmount: Option<number>;
	mipAmount: Option<number>;
	cashOutAmount: Option<number>;
	purchasePrice: Option<number>;
	subordinateLienAmount: Option<number>;
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
export const LELodasoftDataAccessDbModelsAdminApplicationModelIO = type({
	applicationId: createOptionFromOptional(number, 'applicationId'),
	userId: createOptionFromOptional(string, 'userId'),
	primaryBorrowerId: createOptionFromOptional(number, 'primaryBorrowerId'),
	loanStatusId: createOptionFromOptional(number, 'loanStatusId'),
	loanTypeId: createOptionFromOptional(number, 'loanTypeId'),
	loanPurposeId: createOptionFromOptional(number, 'loanPurposeId'),
	customDataId: createOptionFromOptional(number, 'customDataId'),
	refNumber: createOptionFromOptional(string, 'refNumber'),
	losIdentifier: createOptionFromOptional(string, 'losIdentifier'),
	thirdPartyCredentialProviderId: createOptionFromOptional(number, 'thirdPartyCredentialProviderId'),
	losVendor: createOptionFromOptional(createEnumType<LosVendorEnum>(LosVendorEnum, 'LosVendorEnum'), 'losVendor'),
	loanAmount: createOptionFromOptional(number, 'loanAmount'),
	mipAmount: createOptionFromOptional(number, 'mipAmount'),
	cashOutAmount: createOptionFromOptional(number, 'cashOutAmount'),
	purchasePrice: createOptionFromOptional(number, 'purchasePrice'),
	subordinateLienAmount: createOptionFromOptional(number, 'subordinateLienAmount'),
	presentValue: createOptionFromOptional(number, 'presentValue'),
	downAmount: createOptionFromOptional(number, 'downAmount'),
	rate: createOptionFromOptional(number, 'rate'),
	productId: createOptionFromOptional(number, 'productId'),
	lenderId: createOptionFromOptional(number, 'lenderId'),
	term: createOptionFromOptional(number, 'term'),
	estimatedClosingDate: createOptionFromOptional(DateFromISOString, 'estimatedClosingDate'),
	lockExpirationDate: createOptionFromOptional(DateFromISOString, 'lockExpirationDate'),
	cdIssueDate: createOptionFromOptional(DateFromISOString, 'cdIssueDate'),
	cdSignedDate: createOptionFromOptional(DateFromISOString, 'cdSignedDate'),
	originationDate: createOptionFromOptional(DateFromISOString, 'originationDate'),
	mailingStreet: createOptionFromOptional(string, 'mailingStreet'),
	mailingPOBox: createOptionFromOptional(string, 'mailingPOBox'),
	mailingCity: createOptionFromOptional(string, 'mailingCity'),
	mailingState: createOptionFromOptional(string, 'mailingState'),
	mailingZip: createOptionFromOptional(string, 'mailingZip'),
	dateCreate: createOptionFromOptional(DateFromISOString, 'dateCreate'),
	referralSource: createOptionFromOptional(number, 'referralSource'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
