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
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
	userProfile: createOptionFromOptional(LELodasoftDataAccessDbModelsUserProfileIO, 'userProfile'),
	integrations: createOptionFromOptional(LELodasoftApiModelsSharedIntegrationsModelIO, 'integrations'),
	thirdPartyCredentials: createOptionFromOptional(
		array(LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModelIO),
		'thirdPartyCredentials',
	),
	emailService: createOptionFromOptional(LELodasoftDataAccessDbModelsSharedEmailServiceModelIO, 'emailService'),
	smsService: createOptionFromOptional(LELodasoftDataAccessDbModelsSharedSmsServiceModelIO, 'smsService'),
	userName: createOptionFromOptional(string, 'userName'),
	reminderEmailEnabled: createOptionFromOptional(
		LELodasoftCommonModelsConfigurationConfigurationViewModelIO,
		'reminderEmailEnabled',
	),
	reminderEmailInterval: createOptionFromOptional(
		LELodasoftCommonModelsConfigurationConfigurationViewModelIO,
		'reminderEmailInterval',
	),
	reminderSmsEnabled: createOptionFromOptional(
		LELodasoftCommonModelsConfigurationConfigurationViewModelIO,
		'reminderSmsEnabled',
	),
	reminderSmsInterval: createOptionFromOptional(
		LELodasoftCommonModelsConfigurationConfigurationViewModelIO,
		'reminderSmsInterval',
	),
	definedEmailTemplate: createOptionFromOptional(
		LELodasoftCommonModelsEmailDefinedEmailTemplateViewModelIO,
		'definedEmailTemplate',
	),
	definedSmsTemplate: createOptionFromOptional(
		LELodasoftDataAccessDbModelsConfigurationDefinedSmsTemplateModelIO,
		'definedSmsTemplate',
	),
});
