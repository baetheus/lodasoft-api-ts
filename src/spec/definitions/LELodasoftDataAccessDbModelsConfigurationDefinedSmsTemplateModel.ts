import {
	LELodasoftDataAccessDbModelsConfigurationCompanyModel,
	LELodasoftDataAccessDbModelsConfigurationCompanyModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationCompanyModel';
import {
	LELodasoftDataAccessDbModelsUserProfile,
	LELodasoftDataAccessDbModelsUserProfileIO,
} from '../definitions/LELodasoftDataAccessDbModelsUserProfile';
import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftDataAccessDbModelsConfigurationDefinedSmsTemplateModel = {
	id: Option<number>;
	companyId: Option<number>;
	company: Option<LELodasoftDataAccessDbModelsConfigurationCompanyModel>;
	userId: Option<string>;
	user: Option<LELodasoftDataAccessDbModelsUserProfile>;
	onlineAppRegistrationOverride: Option<boolean>;
	onlineAppRegistrationSms: Option<string>;
	inviteOverride: Option<boolean>;
	inviteSms: Option<string>;
	inviteAgentOverride: Option<boolean>;
	inviteAgentSms: Option<string>;
	requestOverride: Option<boolean>;
	requestSms: Option<string>;
	reminderOverride: Option<boolean>;
	reminderSms: Option<string>;
};
export const LELodasoftDataAccessDbModelsConfigurationDefinedSmsTemplateModelIO = type({
	id: createOptionFromOptional(number, 'id'),
	companyId: createOptionFromOptional(number, 'companyId'),
	company: createOptionFromOptional(LELodasoftDataAccessDbModelsConfigurationCompanyModelIO, 'company'),
	userId: createOptionFromOptional(string, 'userId'),
	user: createOptionFromOptional(LELodasoftDataAccessDbModelsUserProfileIO, 'user'),
	onlineAppRegistrationOverride: createOptionFromOptional(boolean, 'onlineAppRegistrationOverride'),
	onlineAppRegistrationSms: createOptionFromOptional(string, 'onlineAppRegistrationSms'),
	inviteOverride: createOptionFromOptional(boolean, 'inviteOverride'),
	inviteSms: createOptionFromOptional(string, 'inviteSms'),
	inviteAgentOverride: createOptionFromOptional(boolean, 'inviteAgentOverride'),
	inviteAgentSms: createOptionFromOptional(string, 'inviteAgentSms'),
	requestOverride: createOptionFromOptional(boolean, 'requestOverride'),
	requestSms: createOptionFromOptional(string, 'requestSms'),
	reminderOverride: createOptionFromOptional(boolean, 'reminderOverride'),
	reminderSms: createOptionFromOptional(string, 'reminderSms'),
});
