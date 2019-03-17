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
	id: createOptionFromNullable(number),
	companyId: createOptionFromNullable(number),
	company: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationCompanyModelIO),
	userId: createOptionFromNullable(string),
	user: createOptionFromNullable(LELodasoftDataAccessDbModelsUserProfileIO),
	onlineAppRegistrationOverride: createOptionFromNullable(boolean),
	onlineAppRegistrationSms: createOptionFromNullable(string),
	inviteOverride: createOptionFromNullable(boolean),
	inviteSms: createOptionFromNullable(string),
	inviteAgentOverride: createOptionFromNullable(boolean),
	inviteAgentSms: createOptionFromNullable(string),
	requestOverride: createOptionFromNullable(boolean),
	requestSms: createOptionFromNullable(string),
	reminderOverride: createOptionFromNullable(boolean),
	reminderSms: createOptionFromNullable(string),
});
