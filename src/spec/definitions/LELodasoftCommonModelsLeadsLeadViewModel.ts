import { Option } from 'fp-ts/lib/Option';
import { number, string, array, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	leadId: createOptionFromOptional(number, 'leadId'),
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	firstName: createOptionFromOptional(string, 'firstName'),
	lastName: createOptionFromOptional(string, 'lastName'),
	socialSecurityNumber: createOptionFromOptional(string, 'socialSecurityNumber'),
	birthDate: createOptionFromOptional(DateFromDatelike, 'birthDate'),
	email: createOptionFromOptional(string, 'email'),
	phone: createOptionFromOptional(string, 'phone'),
	workPhone: createOptionFromOptional(string, 'workPhone'),
	fax: createOptionFromOptional(string, 'fax'),
	mailingAddress1: createOptionFromOptional(string, 'mailingAddress1'),
	mailingAddress2: createOptionFromOptional(string, 'mailingAddress2'),
	mailingCity: createOptionFromOptional(string, 'mailingCity'),
	mailingState: createOptionFromOptional(string, 'mailingState'),
	mailingZip: createOptionFromOptional(string, 'mailingZip'),
	creditScore: createOptionFromOptional(number, 'creditScore'),
	subjectPropertyAddress1: createOptionFromOptional(string, 'subjectPropertyAddress1'),
	subjectPropertyAddress2: createOptionFromOptional(string, 'subjectPropertyAddress2'),
	subjectPropertyCity: createOptionFromOptional(string, 'subjectPropertyCity'),
	subjectPropertyState: createOptionFromOptional(string, 'subjectPropertyState'),
	subjectPropertyZip: createOptionFromOptional(string, 'subjectPropertyZip'),
	loanAmount: createOptionFromOptional(number, 'loanAmount'),
	appraisedValue: createOptionFromOptional(number, 'appraisedValue'),
	cashOutAmount: createOptionFromOptional(number, 'cashOutAmount'),
	downPayment: createOptionFromOptional(number, 'downPayment'),
	interestRate: createOptionFromOptional(number, 'interestRate'),
	loanTypeId: createOptionFromOptional(number, 'loanTypeId'),
	loanPurposeId: createOptionFromOptional(number, 'loanPurposeId'),
	currentLoanUnpaidPrincipalBalance: createOptionFromOptional(number, 'currentLoanUnpaidPrincipalBalance'),
	currentLoanEstimatedValue: createOptionFromOptional(number, 'currentLoanEstimatedValue'),
	currentLoanInterestRate: createOptionFromOptional(number, 'currentLoanInterestRate'),
	currentLoanTerm: createOptionFromOptional(number, 'currentLoanTerm'),
	leadContactUserId: createOptionFromOptional(string, 'leadContactUserId'),
	appointmentDate: createOptionFromOptional(DateFromDatelike, 'appointmentDate'),
	appointmentDescription: createOptionFromOptional(string, 'appointmentDescription'),
	appointmentNotes: createOptionFromOptional(string, 'appointmentNotes'),
	customData1: createOptionFromOptional(string, 'customData1'),
	customData2: createOptionFromOptional(string, 'customData2'),
	customData3: createOptionFromOptional(string, 'customData3'),
	customData4: createOptionFromOptional(string, 'customData4'),
	customData5: createOptionFromOptional(string, 'customData5'),
	customData6: createOptionFromOptional(string, 'customData6'),
	customData7: createOptionFromOptional(string, 'customData7'),
	customData8: createOptionFromOptional(string, 'customData8'),
	customData9: createOptionFromOptional(string, 'customData9'),
	customData10: createOptionFromOptional(string, 'customData10'),
	leadCampaignId: createOptionFromOptional(number, 'leadCampaignId'),
	leadStatusId: createOptionFromOptional(number, 'leadStatusId'),
	referralSource: createOptionFromOptional(number, 'referralSource'),
	leadSource: createOptionFromOptional(string, 'leadSource'),
	losRefNumber: createOptionFromOptional(string, 'losRefNumber'),
	internalNotes: createOptionFromOptional(string, 'internalNotes'),
	postLeadRequestJson: createOptionFromOptional(string, 'postLeadRequestJson'),
	lastAttemptedContact: createOptionFromOptional(DateFromDatelike, 'lastAttemptedContact'),
	lastSuccessfulContact: createOptionFromOptional(DateFromDatelike, 'lastSuccessfulContact'),
	leadListIds: createOptionFromOptional(array(number), 'leadListIds'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromDatelike, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromDatelike, 'dateUpdated'),
});
