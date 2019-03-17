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
	primaryBorrowerId: createOptionFromNullable(number),
	applicationId: createOptionFromNullable(number),
	lastName: createOptionFromNullable(string),
	firstName: createOptionFromNullable(string),
	dateCreateBorrower: createOptionFromNullable(DateFromISOString),
	refNumber: createOptionFromNullable(string),
	mailingStreet: createOptionFromNullable(string),
	mailingCity: createOptionFromNullable(string),
	mailingState: createOptionFromNullable(string),
	mailingZip: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	loanAmount: createOptionFromNullable(number),
	loanStatusId: createOptionFromNullable(number),
	loanStatusName: createOptionFromNullable(string),
	loanPurposeId: createOptionFromNullable(number),
	loanPurposeName: createOptionFromNullable(string),
	loanTypeId: createOptionFromNullable(number),
	loanTypeName: createOptionFromNullable(string),
	companyId: createOptionFromNullable(number),
	userId: createOptionFromNullable(string),
	showAsArchive: createOptionFromNullable(boolean),
	hideFromCounter: createOptionFromNullable(boolean),
	appCreateDate: createOptionFromNullable(DateFromISOString),
	lockExpirationDate: createOptionFromNullable(DateFromISOString),
	estimatedClosingDate: createOptionFromNullable(DateFromISOString),
	cdIssueDate: createOptionFromNullable(DateFromISOString),
	cdSignedDate: createOptionFromNullable(DateFromISOString),
	originationDate: createOptionFromNullable(DateFromISOString),
	primaryRoleContact: createOptionFromNullable(string),
	primaryRoleContactId: createOptionFromNullable(string),
	primaryRoleName: createOptionFromNullable(string),
	lenderName: createOptionFromNullable(string),
	loanStatusChangedDate: createOptionFromNullable(DateFromISOString),
});
