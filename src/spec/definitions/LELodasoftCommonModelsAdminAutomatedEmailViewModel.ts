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
	automatedEmailId: createOptionFromNullable(number),
	emailCampaignId: createOptionFromNullable(number),
	emailTemplateId: createOptionFromNullable(number),
	delayDays: createOptionFromNullable(number),
	daysOfWeekToSend: createOptionFromNullable(string),
	timeOfDayToSend: createOptionFromNullable(string),
	from: createOptionFromNullable(string),
	sendFromLoanContact: createOptionFromNullable(boolean),
	to: createOptionFromNullable(string),
	cc: createOptionFromNullable(string),
	bcc: createOptionFromNullable(string),
	subject: createOptionFromNullable(string),
	appendLoanContactEmailSignature: createOptionFromNullable(boolean),
	active: createOptionFromNullable(boolean),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
