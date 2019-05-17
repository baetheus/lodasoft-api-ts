import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftCommonModelsPipelinePipelineApplicationView = {
	primaryBorrowerId: Option<number>;
	applicationId: Option<number>;
	lastName: Option<string>;
	firstName: Option<string>;
	dateCreateBorrower: Option<Date>;
	refNumber: Option<string>;
	mailingStreet: Option<string>;
	mailingCity: Option<string>;
	mailingState: Option<string>;
	mailingZip: Option<string>;
	dateInserted: Option<Date>;
	loanAmount: Option<number>;
	loanStatusId: Option<number>;
	loanStatusName: Option<string>;
	loanPurposeId: Option<number>;
	loanPurposeName: Option<string>;
	loanTypeId: Option<number>;
	loanTypeName: Option<string>;
	companyId: Option<number>;
	userId: Option<string>;
	showAsArchive: Option<boolean>;
	hideFromCounter: Option<boolean>;
	appCreateDate: Option<Date>;
	lockExpirationDate: Option<Date>;
	estimatedClosingDate: Option<Date>;
	cdIssueDate: Option<Date>;
	cdSignedDate: Option<Date>;
	originationDate: Option<Date>;
	primaryRoleContact: Option<string>;
	primaryRoleContactId: Option<string>;
	primaryRoleName: Option<string>;
	lenderName: Option<string>;
	loanStatusChangedDate: Option<Date>;
};
export const LELodasoftCommonModelsPipelinePipelineApplicationViewIO = type({
	primaryBorrowerId: createOptionFromOptional(number, 'primaryBorrowerId'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	lastName: createOptionFromOptional(string, 'lastName'),
	firstName: createOptionFromOptional(string, 'firstName'),
	dateCreateBorrower: createOptionFromOptional(DateFromDatelike, 'dateCreateBorrower'),
	refNumber: createOptionFromOptional(string, 'refNumber'),
	mailingStreet: createOptionFromOptional(string, 'mailingStreet'),
	mailingCity: createOptionFromOptional(string, 'mailingCity'),
	mailingState: createOptionFromOptional(string, 'mailingState'),
	mailingZip: createOptionFromOptional(string, 'mailingZip'),
	dateInserted: createOptionFromOptional(DateFromDatelike, 'dateInserted'),
	loanAmount: createOptionFromOptional(number, 'loanAmount'),
	loanStatusId: createOptionFromOptional(number, 'loanStatusId'),
	loanStatusName: createOptionFromOptional(string, 'loanStatusName'),
	loanPurposeId: createOptionFromOptional(number, 'loanPurposeId'),
	loanPurposeName: createOptionFromOptional(string, 'loanPurposeName'),
	loanTypeId: createOptionFromOptional(number, 'loanTypeId'),
	loanTypeName: createOptionFromOptional(string, 'loanTypeName'),
	companyId: createOptionFromOptional(number, 'companyId'),
	userId: createOptionFromOptional(string, 'userId'),
	showAsArchive: createOptionFromOptional(boolean, 'showAsArchive'),
	hideFromCounter: createOptionFromOptional(boolean, 'hideFromCounter'),
	appCreateDate: createOptionFromOptional(DateFromDatelike, 'appCreateDate'),
	lockExpirationDate: createOptionFromOptional(DateFromDatelike, 'lockExpirationDate'),
	estimatedClosingDate: createOptionFromOptional(DateFromDatelike, 'estimatedClosingDate'),
	cdIssueDate: createOptionFromOptional(DateFromDatelike, 'cdIssueDate'),
	cdSignedDate: createOptionFromOptional(DateFromDatelike, 'cdSignedDate'),
	originationDate: createOptionFromOptional(DateFromDatelike, 'originationDate'),
	primaryRoleContact: createOptionFromOptional(string, 'primaryRoleContact'),
	primaryRoleContactId: createOptionFromOptional(string, 'primaryRoleContactId'),
	primaryRoleName: createOptionFromOptional(string, 'primaryRoleName'),
	lenderName: createOptionFromOptional(string, 'lenderName'),
	loanStatusChangedDate: createOptionFromOptional(DateFromDatelike, 'loanStatusChangedDate'),
});
