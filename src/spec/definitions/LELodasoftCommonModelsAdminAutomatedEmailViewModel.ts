import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsAdminAutomatedEmailViewModel = {
	automatedEmailId: Option<number>;
	emailCampaignId: Option<number>;
	emailTemplateId: Option<number>;
	delayDays: Option<number>;
	daysOfWeekToSend: Option<string>;
	timeOfDayToSend: Option<string>;
	from: Option<string>;
	sendFromLoanContact: Option<boolean>;
	to: Option<string>;
	cc: Option<string>;
	bcc: Option<string>;
	subject: Option<string>;
	appendLoanContactEmailSignature: Option<boolean>;
	active: Option<boolean>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsAdminAutomatedEmailViewModelIO = type({
	automatedEmailId: createOptionFromOptional(number, 'automatedEmailId'),
	emailCampaignId: createOptionFromOptional(number, 'emailCampaignId'),
	emailTemplateId: createOptionFromOptional(number, 'emailTemplateId'),
	delayDays: createOptionFromOptional(number, 'delayDays'),
	daysOfWeekToSend: createOptionFromOptional(string, 'daysOfWeekToSend'),
	timeOfDayToSend: createOptionFromOptional(string, 'timeOfDayToSend'),
	from: createOptionFromOptional(string, 'from'),
	sendFromLoanContact: createOptionFromOptional(boolean, 'sendFromLoanContact'),
	to: createOptionFromOptional(string, 'to'),
	cc: createOptionFromOptional(string, 'cc'),
	bcc: createOptionFromOptional(string, 'bcc'),
	subject: createOptionFromOptional(string, 'subject'),
	appendLoanContactEmailSignature: createOptionFromOptional(boolean, 'appendLoanContactEmailSignature'),
	active: createOptionFromOptional(boolean, 'active'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
