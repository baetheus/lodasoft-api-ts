import {
	LELodasoftCommonModelsAdminEmailTemplateImageViewModel,
	LELodasoftCommonModelsAdminEmailTemplateImageViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminEmailTemplateImageViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, array, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	id: createOptionFromOptional(number, 'id'),
	userId: createOptionFromOptional(string, 'userId'),
	onlineAppRegistrationOverride: createOptionFromOptional(boolean, 'onlineAppRegistrationOverride'),
	onlineAppRegistrationSubject: createOptionFromOptional(string, 'onlineAppRegistrationSubject'),
	onlineAppRegistrationEmail: createOptionFromOptional(string, 'onlineAppRegistrationEmail'),
	onlineAppStartedOverride: createOptionFromOptional(boolean, 'onlineAppStartedOverride'),
	onlineAppStartedSubject: createOptionFromOptional(string, 'onlineAppStartedSubject'),
	onlineAppStartedEmail: createOptionFromOptional(string, 'onlineAppStartedEmail'),
	onlineAppSubmissionOverride: createOptionFromOptional(boolean, 'onlineAppSubmissionOverride'),
	onlineAppSubmissionSubject: createOptionFromOptional(string, 'onlineAppSubmissionSubject'),
	onlineAppSubmissionEmail: createOptionFromOptional(string, 'onlineAppSubmissionEmail'),
	inviteOverride: createOptionFromOptional(boolean, 'inviteOverride'),
	inviteSubject: createOptionFromOptional(string, 'inviteSubject'),
	inviteEmail: createOptionFromOptional(string, 'inviteEmail'),
	inviteAgentOverride: createOptionFromOptional(boolean, 'inviteAgentOverride'),
	inviteAgentSubject: createOptionFromOptional(string, 'inviteAgentSubject'),
	inviteAgentEmail: createOptionFromOptional(string, 'inviteAgentEmail'),
	requestOverride: createOptionFromOptional(boolean, 'requestOverride'),
	requestSubject: createOptionFromOptional(string, 'requestSubject'),
	requestEmail: createOptionFromOptional(string, 'requestEmail'),
	reminderOverride: createOptionFromOptional(boolean, 'reminderOverride'),
	reminderSubject: createOptionFromOptional(string, 'reminderSubject'),
	reminderEmail: createOptionFromOptional(string, 'reminderEmail'),
	images: createOptionFromOptional(array(LELodasoftCommonModelsAdminEmailTemplateImageViewModelIO), 'images'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
