import {
	LELodasoftApiModelsSharedIntegrationsModel,
	LELodasoftApiModelsSharedIntegrationsModelIO,
} from '../definitions/LELodasoftApiModelsSharedIntegrationsModel';
import {
	LELodasoftCommonModelsConfigurationConfigurationViewModel,
	LELodasoftCommonModelsConfigurationConfigurationViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationConfigurationViewModel';
import {
	LELodasoftCommonModelsEmailDefinedEmailTemplateViewModel,
	LELodasoftCommonModelsEmailDefinedEmailTemplateViewModelIO,
} from '../definitions/LELodasoftCommonModelsEmailDefinedEmailTemplateViewModel';
import {
	LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModel,
	LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModelIO,
} from '../definitions/LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModel';
import {
	LELodasoftDataAccessDbModelsConfigurationDefinedSmsTemplateModel,
	LELodasoftDataAccessDbModelsConfigurationDefinedSmsTemplateModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationDefinedSmsTemplateModel';
import {
	LELodasoftDataAccessDbModelsSharedEmailServiceModel,
	LELodasoftDataAccessDbModelsSharedEmailServiceModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsSharedEmailServiceModel';
import {
	LELodasoftDataAccessDbModelsSharedSmsServiceModel,
	LELodasoftDataAccessDbModelsSharedSmsServiceModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsSharedSmsServiceModel';
import {
	LELodasoftDataAccessDbModelsUserProfile,
	LELodasoftDataAccessDbModelsUserProfileIO,
} from '../definitions/LELodasoftDataAccessDbModelsUserProfile';
import { Option } from 'fp-ts/lib/Option';
import { array, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsUserProfileModel = {
	userProfile: Option<LELodasoftDataAccessDbModelsUserProfile>;
	integrations: Option<LELodasoftApiModelsSharedIntegrationsModel>;
	thirdPartyCredentials: Option<Array<LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModel>>;
	emailService: Option<LELodasoftDataAccessDbModelsSharedEmailServiceModel>;
	smsService: Option<LELodasoftDataAccessDbModelsSharedSmsServiceModel>;
	userName: Option<string>;
	reminderEmailEnabled: Option<LELodasoftCommonModelsConfigurationConfigurationViewModel>;
	reminderEmailInterval: Option<LELodasoftCommonModelsConfigurationConfigurationViewModel>;
	reminderSmsEnabled: Option<LELodasoftCommonModelsConfigurationConfigurationViewModel>;
	reminderSmsInterval: Option<LELodasoftCommonModelsConfigurationConfigurationViewModel>;
	definedEmailTemplate: Option<LELodasoftCommonModelsEmailDefinedEmailTemplateViewModel>;
	definedSmsTemplate: Option<LELodasoftDataAccessDbModelsConfigurationDefinedSmsTemplateModel>;
};
export const LELodasoftApiModelsUserProfileModelIO = type({
	userProfile: createOptionFromNullable(LELodasoftDataAccessDbModelsUserProfileIO, 'userProfile'),
	integrations: createOptionFromNullable(LELodasoftApiModelsSharedIntegrationsModelIO, 'integrations'),
	thirdPartyCredentials: createOptionFromNullable(
		array(LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModelIO),
		'thirdPartyCredentials',
	),
	emailService: createOptionFromNullable(LELodasoftDataAccessDbModelsSharedEmailServiceModelIO, 'emailService'),
	smsService: createOptionFromNullable(LELodasoftDataAccessDbModelsSharedSmsServiceModelIO, 'smsService'),
	userName: createOptionFromNullable(string, 'userName'),
	reminderEmailEnabled: createOptionFromNullable(
		LELodasoftCommonModelsConfigurationConfigurationViewModelIO,
		'reminderEmailEnabled',
	),
	reminderEmailInterval: createOptionFromNullable(
		LELodasoftCommonModelsConfigurationConfigurationViewModelIO,
		'reminderEmailInterval',
	),
	reminderSmsEnabled: createOptionFromNullable(
		LELodasoftCommonModelsConfigurationConfigurationViewModelIO,
		'reminderSmsEnabled',
	),
	reminderSmsInterval: createOptionFromNullable(
		LELodasoftCommonModelsConfigurationConfigurationViewModelIO,
		'reminderSmsInterval',
	),
	definedEmailTemplate: createOptionFromNullable(
		LELodasoftCommonModelsEmailDefinedEmailTemplateViewModelIO,
		'definedEmailTemplate',
	),
	definedSmsTemplate: createOptionFromNullable(
		LELodasoftDataAccessDbModelsConfigurationDefinedSmsTemplateModelIO,
		'definedSmsTemplate',
	),
});
