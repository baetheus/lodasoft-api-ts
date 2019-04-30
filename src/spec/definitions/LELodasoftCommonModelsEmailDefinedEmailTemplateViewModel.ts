import {
	LELodasoftCommonModelsAdminEmailTemplateImageViewModel,
	LELodasoftCommonModelsAdminEmailTemplateImageViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminEmailTemplateImageViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, array, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsEmailDefinedEmailTemplateViewModel = {
	id: Option<number>;
	userId: Option<string>;
	onlineAppRegistrationOverride: Option<boolean>;
	onlineAppRegistrationSubject: Option<string>;
	onlineAppRegistrationEmail: Option<string>;
	onlineAppStartedOverride: Option<boolean>;
	onlineAppStartedSubject: Option<string>;
	onlineAppStartedEmail: Option<string>;
	onlineAppSubmissionOverride: Option<boolean>;
	onlineAppSubmissionSubject: Option<string>;
	onlineAppSubmissionEmail: Option<string>;
	inviteOverride: Option<boolean>;
	inviteSubject: Option<string>;
	inviteEmail: Option<string>;
	inviteAgentOverride: Option<boolean>;
	inviteAgentSubject: Option<string>;
	inviteAgentEmail: Option<string>;
	requestOverride: Option<boolean>;
	requestSubject: Option<string>;
	requestEmail: Option<string>;
	reminderOverride: Option<boolean>;
	reminderSubject: Option<string>;
	reminderEmail: Option<string>;
	images: Option<Array<LELodasoftCommonModelsAdminEmailTemplateImageViewModel>>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsEmailDefinedEmailTemplateViewModelIO = type({
	id: createOptionFromNullable(number, 'id'),
	userId: createOptionFromNullable(string, 'userId'),
	onlineAppRegistrationOverride: createOptionFromNullable(boolean, 'onlineAppRegistrationOverride'),
	onlineAppRegistrationSubject: createOptionFromNullable(string, 'onlineAppRegistrationSubject'),
	onlineAppRegistrationEmail: createOptionFromNullable(string, 'onlineAppRegistrationEmail'),
	onlineAppStartedOverride: createOptionFromNullable(boolean, 'onlineAppStartedOverride'),
	onlineAppStartedSubject: createOptionFromNullable(string, 'onlineAppStartedSubject'),
	onlineAppStartedEmail: createOptionFromNullable(string, 'onlineAppStartedEmail'),
	onlineAppSubmissionOverride: createOptionFromNullable(boolean, 'onlineAppSubmissionOverride'),
	onlineAppSubmissionSubject: createOptionFromNullable(string, 'onlineAppSubmissionSubject'),
	onlineAppSubmissionEmail: createOptionFromNullable(string, 'onlineAppSubmissionEmail'),
	inviteOverride: createOptionFromNullable(boolean, 'inviteOverride'),
	inviteSubject: createOptionFromNullable(string, 'inviteSubject'),
	inviteEmail: createOptionFromNullable(string, 'inviteEmail'),
	inviteAgentOverride: createOptionFromNullable(boolean, 'inviteAgentOverride'),
	inviteAgentSubject: createOptionFromNullable(string, 'inviteAgentSubject'),
	inviteAgentEmail: createOptionFromNullable(string, 'inviteAgentEmail'),
	requestOverride: createOptionFromNullable(boolean, 'requestOverride'),
	requestSubject: createOptionFromNullable(string, 'requestSubject'),
	requestEmail: createOptionFromNullable(string, 'requestEmail'),
	reminderOverride: createOptionFromNullable(boolean, 'reminderOverride'),
	reminderSubject: createOptionFromNullable(string, 'reminderSubject'),
	reminderEmail: createOptionFromNullable(string, 'reminderEmail'),
	images: createOptionFromNullable(array(LELodasoftCommonModelsAdminEmailTemplateImageViewModelIO), 'images'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
