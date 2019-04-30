import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

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
	automatedEmailId: createOptionFromNullable(number, 'automatedEmailId'),
	emailCampaignId: createOptionFromNullable(number, 'emailCampaignId'),
	emailTemplateId: createOptionFromNullable(number, 'emailTemplateId'),
	delayDays: createOptionFromNullable(number, 'delayDays'),
	daysOfWeekToSend: createOptionFromNullable(string, 'daysOfWeekToSend'),
	timeOfDayToSend: createOptionFromNullable(string, 'timeOfDayToSend'),
	from: createOptionFromNullable(string, 'from'),
	sendFromLoanContact: createOptionFromNullable(boolean, 'sendFromLoanContact'),
	to: createOptionFromNullable(string, 'to'),
	cc: createOptionFromNullable(string, 'cc'),
	bcc: createOptionFromNullable(string, 'bcc'),
	subject: createOptionFromNullable(string, 'subject'),
	appendLoanContactEmailSignature: createOptionFromNullable(boolean, 'appendLoanContactEmailSignature'),
	active: createOptionFromNullable(boolean, 'active'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
