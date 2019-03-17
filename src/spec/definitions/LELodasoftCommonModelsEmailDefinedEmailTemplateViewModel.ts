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
	id: createOptionFromNullable(number),
	userId: createOptionFromNullable(string),
	onlineAppRegistrationOverride: createOptionFromNullable(boolean),
	onlineAppRegistrationSubject: createOptionFromNullable(string),
	onlineAppRegistrationEmail: createOptionFromNullable(string),
	inviteOverride: createOptionFromNullable(boolean),
	inviteSubject: createOptionFromNullable(string),
	inviteEmail: createOptionFromNullable(string),
	inviteAgentOverride: createOptionFromNullable(boolean),
	inviteAgentSubject: createOptionFromNullable(string),
	inviteAgentEmail: createOptionFromNullable(string),
	requestOverride: createOptionFromNullable(boolean),
	requestSubject: createOptionFromNullable(string),
	requestEmail: createOptionFromNullable(string),
	reminderOverride: createOptionFromNullable(boolean),
	reminderSubject: createOptionFromNullable(string),
	reminderEmail: createOptionFromNullable(string),
	images: createOptionFromNullable(array(LELodasoftCommonModelsAdminEmailTemplateImageViewModelIO)),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
