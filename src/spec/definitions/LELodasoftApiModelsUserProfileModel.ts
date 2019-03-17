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
	userProfile: createOptionFromNullable(LELodasoftDataAccessDbModelsUserProfileIO),
	integrations: createOptionFromNullable(LELodasoftApiModelsSharedIntegrationsModelIO),
	thirdPartyCredentials: createOptionFromNullable(
		array(LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModelIO),
	),
	emailService: createOptionFromNullable(LELodasoftDataAccessDbModelsSharedEmailServiceModelIO),
	smsService: createOptionFromNullable(LELodasoftDataAccessDbModelsSharedSmsServiceModelIO),
	userName: createOptionFromNullable(string),
	reminderEmailEnabled: createOptionFromNullable(LELodasoftCommonModelsConfigurationConfigurationViewModelIO),
	reminderEmailInterval: createOptionFromNullable(LELodasoftCommonModelsConfigurationConfigurationViewModelIO),
	reminderSmsEnabled: createOptionFromNullable(LELodasoftCommonModelsConfigurationConfigurationViewModelIO),
	reminderSmsInterval: createOptionFromNullable(LELodasoftCommonModelsConfigurationConfigurationViewModelIO),
	definedEmailTemplate: createOptionFromNullable(LELodasoftCommonModelsEmailDefinedEmailTemplateViewModelIO),
	definedSmsTemplate: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationDefinedSmsTemplateModelIO),
});
