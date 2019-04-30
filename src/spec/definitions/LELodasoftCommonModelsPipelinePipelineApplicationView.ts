import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

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
	primaryBorrowerId: createOptionFromNullable(number, 'primaryBorrowerId'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	lastName: createOptionFromNullable(string, 'lastName'),
	firstName: createOptionFromNullable(string, 'firstName'),
	dateCreateBorrower: createOptionFromNullable(DateFromISOString, 'dateCreateBorrower'),
	refNumber: createOptionFromNullable(string, 'refNumber'),
	mailingStreet: createOptionFromNullable(string, 'mailingStreet'),
	mailingCity: createOptionFromNullable(string, 'mailingCity'),
	mailingState: createOptionFromNullable(string, 'mailingState'),
	mailingZip: createOptionFromNullable(string, 'mailingZip'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	loanAmount: createOptionFromNullable(number, 'loanAmount'),
	loanStatusId: createOptionFromNullable(number, 'loanStatusId'),
	loanStatusName: createOptionFromNullable(string, 'loanStatusName'),
	loanPurposeId: createOptionFromNullable(number, 'loanPurposeId'),
	loanPurposeName: createOptionFromNullable(string, 'loanPurposeName'),
	loanTypeId: createOptionFromNullable(number, 'loanTypeId'),
	loanTypeName: createOptionFromNullable(string, 'loanTypeName'),
	companyId: createOptionFromNullable(number, 'companyId'),
	userId: createOptionFromNullable(string, 'userId'),
	showAsArchive: createOptionFromNullable(boolean, 'showAsArchive'),
	hideFromCounter: createOptionFromNullable(boolean, 'hideFromCounter'),
	appCreateDate: createOptionFromNullable(DateFromISOString, 'appCreateDate'),
	lockExpirationDate: createOptionFromNullable(DateFromISOString, 'lockExpirationDate'),
	estimatedClosingDate: createOptionFromNullable(DateFromISOString, 'estimatedClosingDate'),
	cdIssueDate: createOptionFromNullable(DateFromISOString, 'cdIssueDate'),
	cdSignedDate: createOptionFromNullable(DateFromISOString, 'cdSignedDate'),
	originationDate: createOptionFromNullable(DateFromISOString, 'originationDate'),
	primaryRoleContact: createOptionFromNullable(string, 'primaryRoleContact'),
	primaryRoleContactId: createOptionFromNullable(string, 'primaryRoleContactId'),
	primaryRoleName: createOptionFromNullable(string, 'primaryRoleName'),
	lenderName: createOptionFromNullable(string, 'lenderName'),
	loanStatusChangedDate: createOptionFromNullable(DateFromISOString, 'loanStatusChangedDate'),
});
