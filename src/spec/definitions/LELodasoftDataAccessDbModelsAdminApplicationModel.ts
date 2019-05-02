import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import { createEnumType } from '../utils/utils';

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
	applicationId: createOptionFromNullable(number, 'applicationId'),
	userId: createOptionFromNullable(string, 'userId'),
	primaryBorrowerId: createOptionFromNullable(number, 'primaryBorrowerId'),
	loanStatusId: createOptionFromNullable(number, 'loanStatusId'),
	loanTypeId: createOptionFromNullable(number, 'loanTypeId'),
	loanPurposeId: createOptionFromNullable(number, 'loanPurposeId'),
	customDataId: createOptionFromNullable(number, 'customDataId'),
	refNumber: createOptionFromNullable(string, 'refNumber'),
	losIdentifier: createOptionFromNullable(string, 'losIdentifier'),
	thirdPartyCredentialProviderId: createOptionFromNullable(number, 'thirdPartyCredentialProviderId'),
	losVendor: createOptionFromNullable(createEnumType<LosVendorEnum>(LosVendorEnum, 'LosVendorEnum'), 'losVendor'),
	loanAmount: createOptionFromNullable(number, 'loanAmount'),
	mipAmount: createOptionFromNullable(number, 'mipAmount'),
	cashOutAmount: createOptionFromNullable(number, 'cashOutAmount'),
	purchasePrice: createOptionFromNullable(number, 'purchasePrice'),
	subordinateLienAmount: createOptionFromNullable(number, 'subordinateLienAmount'),
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
