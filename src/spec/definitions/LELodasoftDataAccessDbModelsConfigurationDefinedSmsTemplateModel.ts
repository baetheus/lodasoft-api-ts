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
import { createOptionFromNullable } from 'io-ts-types';

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
	id: createOptionFromNullable(number, 'id'),
	companyId: createOptionFromNullable(number, 'companyId'),
	company: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationCompanyModelIO, 'company'),
	userId: createOptionFromNullable(string, 'userId'),
	user: createOptionFromNullable(LELodasoftDataAccessDbModelsUserProfileIO, 'user'),
	onlineAppRegistrationOverride: createOptionFromNullable(boolean, 'onlineAppRegistrationOverride'),
	onlineAppRegistrationSms: createOptionFromNullable(string, 'onlineAppRegistrationSms'),
	inviteOverride: createOptionFromNullable(boolean, 'inviteOverride'),
	inviteSms: createOptionFromNullable(string, 'inviteSms'),
	inviteAgentOverride: createOptionFromNullable(boolean, 'inviteAgentOverride'),
	inviteAgentSms: createOptionFromNullable(string, 'inviteAgentSms'),
	requestOverride: createOptionFromNullable(boolean, 'requestOverride'),
	requestSms: createOptionFromNullable(string, 'requestSms'),
	reminderOverride: createOptionFromNullable(boolean, 'reminderOverride'),
	reminderSms: createOptionFromNullable(string, 'reminderSms'),
});
