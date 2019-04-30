import { Option } from 'fp-ts/lib/Option';
import { number, string, array, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsLeadsLeadViewModel = {
	leadId: Option<number>;
	borrowerId: Option<number>;
	applicationId: Option<number>;
	firstName: Option<string>;
	lastName: Option<string>;
	socialSecurityNumber: Option<string>;
	birthDate: Option<Date>;
	email: Option<string>;
	phone: Option<string>;
	workPhone: Option<string>;
	fax: Option<string>;
	mailingAddress1: Option<string>;
	mailingAddress2: Option<string>;
	mailingCity: Option<string>;
	mailingState: Option<string>;
	mailingZip: Option<string>;
	creditScore: Option<number>;
	subjectPropertyAddress1: Option<string>;
	subjectPropertyAddress2: Option<string>;
	subjectPropertyCity: Option<string>;
	subjectPropertyState: Option<string>;
	subjectPropertyZip: Option<string>;
	loanAmount: Option<number>;
	appraisedValue: Option<number>;
	cashOutAmount: Option<number>;
	downPayment: Option<number>;
	interestRate: Option<number>;
	loanTypeId: Option<number>;
	loanPurposeId: Option<number>;
	currentLoanUnpaidPrincipalBalance: Option<number>;
	currentLoanEstimatedValue: Option<number>;
	currentLoanInterestRate: Option<number>;
	currentLoanTerm: Option<number>;
	leadContactUserId: Option<string>;
	appointmentDate: Option<Date>;
	appointmentDescription: Option<string>;
	appointmentNotes: Option<string>;
	customData1: Option<string>;
	customData2: Option<string>;
	customData3: Option<string>;
	customData4: Option<string>;
	customData5: Option<string>;
	customData6: Option<string>;
	customData7: Option<string>;
	customData8: Option<string>;
	customData9: Option<string>;
	customData10: Option<string>;
	leadCampaignId: Option<number>;
	leadStatusId: Option<number>;
	referralSource: Option<number>;
	leadSource: Option<string>;
	losRefNumber: Option<string>;
	internalNotes: Option<string>;
	postLeadRequestJson: Option<string>;
	lastAttemptedContact: Option<Date>;
	lastSuccessfulContact: Option<Date>;
	leadListIds: Option<Array<number>>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsLeadsLeadViewModelIO = type({
	leadId: createOptionFromNullable(number, 'leadId'),
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	firstName: createOptionFromNullable(string, 'firstName'),
	lastName: createOptionFromNullable(string, 'lastName'),
	socialSecurityNumber: createOptionFromNullable(string, 'socialSecurityNumber'),
	birthDate: createOptionFromNullable(DateFromISOString, 'birthDate'),
	email: createOptionFromNullable(string, 'email'),
	phone: createOptionFromNullable(string, 'phone'),
	workPhone: createOptionFromNullable(string, 'workPhone'),
	fax: createOptionFromNullable(string, 'fax'),
	mailingAddress1: createOptionFromNullable(string, 'mailingAddress1'),
	mailingAddress2: createOptionFromNullable(string, 'mailingAddress2'),
	mailingCity: createOptionFromNullable(string, 'mailingCity'),
	mailingState: createOptionFromNullable(string, 'mailingState'),
	mailingZip: createOptionFromNullable(string, 'mailingZip'),
	creditScore: createOptionFromNullable(number, 'creditScore'),
	subjectPropertyAddress1: createOptionFromNullable(string, 'subjectPropertyAddress1'),
	subjectPropertyAddress2: createOptionFromNullable(string, 'subjectPropertyAddress2'),
	subjectPropertyCity: createOptionFromNullable(string, 'subjectPropertyCity'),
	subjectPropertyState: createOptionFromNullable(string, 'subjectPropertyState'),
	subjectPropertyZip: createOptionFromNullable(string, 'subjectPropertyZip'),
	loanAmount: createOptionFromNullable(number, 'loanAmount'),
	appraisedValue: createOptionFromNullable(number, 'appraisedValue'),
	cashOutAmount: createOptionFromNullable(number, 'cashOutAmount'),
	downPayment: createOptionFromNullable(number, 'downPayment'),
	interestRate: createOptionFromNullable(number, 'interestRate'),
	loanTypeId: createOptionFromNullable(number, 'loanTypeId'),
	loanPurposeId: createOptionFromNullable(number, 'loanPurposeId'),
	currentLoanUnpaidPrincipalBalance: createOptionFromNullable(number, 'currentLoanUnpaidPrincipalBalance'),
	currentLoanEstimatedValue: createOptionFromNullable(number, 'currentLoanEstimatedValue'),
	currentLoanInterestRate: createOptionFromNullable(number, 'currentLoanInterestRate'),
	currentLoanTerm: createOptionFromNullable(number, 'currentLoanTerm'),
	leadContactUserId: createOptionFromNullable(string, 'leadContactUserId'),
	appointmentDate: createOptionFromNullable(DateFromISOString, 'appointmentDate'),
	appointmentDescription: createOptionFromNullable(string, 'appointmentDescription'),
	appointmentNotes: createOptionFromNullable(string, 'appointmentNotes'),
	customData1: createOptionFromNullable(string, 'customData1'),
	customData2: createOptionFromNullable(string, 'customData2'),
	customData3: createOptionFromNullable(string, 'customData3'),
	customData4: createOptionFromNullable(string, 'customData4'),
	customData5: createOptionFromNullable(string, 'customData5'),
	customData6: createOptionFromNullable(string, 'customData6'),
	customData7: createOptionFromNullable(string, 'customData7'),
	customData8: createOptionFromNullable(string, 'customData8'),
	customData9: createOptionFromNullable(string, 'customData9'),
	customData10: createOptionFromNullable(string, 'customData10'),
	leadCampaignId: createOptionFromNullable(number, 'leadCampaignId'),
	leadStatusId: createOptionFromNullable(number, 'leadStatusId'),
	referralSource: createOptionFromNullable(number, 'referralSource'),
	leadSource: createOptionFromNullable(string, 'leadSource'),
	losRefNumber: createOptionFromNullable(string, 'losRefNumber'),
	internalNotes: createOptionFromNullable(string, 'internalNotes'),
	postLeadRequestJson: createOptionFromNullable(string, 'postLeadRequestJson'),
	lastAttemptedContact: createOptionFromNullable(DateFromISOString, 'lastAttemptedContact'),
	lastSuccessfulContact: createOptionFromNullable(DateFromISOString, 'lastSuccessfulContact'),
	leadListIds: createOptionFromNullable(array(number), 'leadListIds'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
