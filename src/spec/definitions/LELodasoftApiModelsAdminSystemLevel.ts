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
	LELodasoftDataAccessDbModelsConfigurationAgentPortalContentModel,
	LELodasoftDataAccessDbModelsConfigurationAgentPortalContentModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationAgentPortalContentModel';
import {
	LELodasoftDataAccessDbModelsConfigurationBorrowerPortalContentModel,
	LELodasoftDataAccessDbModelsConfigurationBorrowerPortalContentModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationBorrowerPortalContentModel';
import {
	LELodasoftDataAccessDbModelsConfigurationCompanyModel,
	LELodasoftDataAccessDbModelsConfigurationCompanyModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationCompanyModel';
import {
	LELodasoftDataAccessDbModelsConfigurationDefinedSmsTemplateModel,
	LELodasoftDataAccessDbModelsConfigurationDefinedSmsTemplateModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationDefinedSmsTemplateModel';
import {
	LELodasoftDataAccessDbModelsConfigurationOnlineApplicationSettingsModel,
	LELodasoftDataAccessDbModelsConfigurationOnlineApplicationSettingsModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationOnlineApplicationSettingsModel';
import {
	LELodasoftDataAccessDbModelsConfigurationPrequalGenerationSettingsModel,
	LELodasoftDataAccessDbModelsConfigurationPrequalGenerationSettingsModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationPrequalGenerationSettingsModel';
import {
	LELodasoftDataAccessDbModelsSharedEmailServiceModel,
	LELodasoftDataAccessDbModelsSharedEmailServiceModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsSharedEmailServiceModel';
import {
	LELodasoftDataAccessDbModelsSharedSmsServiceModel,
	LELodasoftDataAccessDbModelsSharedSmsServiceModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsSharedSmsServiceModel';
import { Option } from 'fp-ts/lib/Option';
import { array, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftApiModelsAdminSystemLevel = {
	sessionTimeout: Option<LELodasoftCommonModelsConfigurationConfigurationViewModel>;
	reminderEmailEnabled: Option<LELodasoftCommonModelsConfigurationConfigurationViewModel>;
	reminderEmailInterval: Option<LELodasoftCommonModelsConfigurationConfigurationViewModel>;
	reminderSmsEnabled: Option<LELodasoftCommonModelsConfigurationConfigurationViewModel>;
	reminderSmsInterval: Option<LELodasoftCommonModelsConfigurationConfigurationViewModel>;
	documentExportFormat: Option<LELodasoftCommonModelsConfigurationConfigurationViewModel>;
	digitalAssetVerificationEnabled: Option<LELodasoftCommonModelsConfigurationConfigurationViewModel>;
	digitalEmploymentVerificationEnabled: Option<LELodasoftCommonModelsConfigurationConfigurationViewModel>;
	creditReportingEnabled: Option<LELodasoftCommonModelsConfigurationConfigurationViewModel>;
	ausEnabled: Option<LELodasoftCommonModelsConfigurationConfigurationViewModel>;
	losEnabled: Option<LELodasoftCommonModelsConfigurationConfigurationViewModel>;
	defaultCreditVendor: Option<LELodasoftCommonModelsConfigurationConfigurationViewModel>;
	prequalGenerationSettings: Option<LELodasoftDataAccessDbModelsConfigurationPrequalGenerationSettingsModel>;
	onlineApplicationSettings: Option<LELodasoftDataAccessDbModelsConfigurationOnlineApplicationSettingsModel>;
	definedEmailTemplate: Option<LELodasoftCommonModelsEmailDefinedEmailTemplateViewModel>;
	definedSmsTemplate: Option<LELodasoftDataAccessDbModelsConfigurationDefinedSmsTemplateModel>;
	borrowerPortalContent: Option<LELodasoftDataAccessDbModelsConfigurationBorrowerPortalContentModel>;
	agentPortalContent: Option<LELodasoftDataAccessDbModelsConfigurationAgentPortalContentModel>;
	emailService: Option<LELodasoftDataAccessDbModelsSharedEmailServiceModel>;
	smsService: Option<LELodasoftDataAccessDbModelsSharedSmsServiceModel>;
	integrations: Option<LELodasoftApiModelsSharedIntegrationsModel>;
	thirdPartyCredentials: Option<Array<LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModel>>;
	company: Option<LELodasoftDataAccessDbModelsConfigurationCompanyModel>;
};
export const LELodasoftApiModelsAdminSystemLevelIO = type({
	sessionTimeout: createOptionFromOptional(
		LELodasoftCommonModelsConfigurationConfigurationViewModelIO,
		'sessionTimeout',
	),
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
	documentExportFormat: createOptionFromOptional(
		LELodasoftCommonModelsConfigurationConfigurationViewModelIO,
		'documentExportFormat',
	),
	digitalAssetVerificationEnabled: createOptionFromOptional(
		LELodasoftCommonModelsConfigurationConfigurationViewModelIO,
		'digitalAssetVerificationEnabled',
	),
	digitalEmploymentVerificationEnabled: createOptionFromOptional(
		LELodasoftCommonModelsConfigurationConfigurationViewModelIO,
		'digitalEmploymentVerificationEnabled',
	),
	creditReportingEnabled: createOptionFromOptional(
		LELodasoftCommonModelsConfigurationConfigurationViewModelIO,
		'creditReportingEnabled',
	),
	ausEnabled: createOptionFromOptional(LELodasoftCommonModelsConfigurationConfigurationViewModelIO, 'ausEnabled'),
	losEnabled: createOptionFromOptional(LELodasoftCommonModelsConfigurationConfigurationViewModelIO, 'losEnabled'),
	defaultCreditVendor: createOptionFromOptional(
		LELodasoftCommonModelsConfigurationConfigurationViewModelIO,
		'defaultCreditVendor',
	),
	prequalGenerationSettings: createOptionFromOptional(
		LELodasoftDataAccessDbModelsConfigurationPrequalGenerationSettingsModelIO,
		'prequalGenerationSettings',
	),
	onlineApplicationSettings: createOptionFromOptional(
		LELodasoftDataAccessDbModelsConfigurationOnlineApplicationSettingsModelIO,
		'onlineApplicationSettings',
	),
	definedEmailTemplate: createOptionFromOptional(
		LELodasoftCommonModelsEmailDefinedEmailTemplateViewModelIO,
		'definedEmailTemplate',
	),
	definedSmsTemplate: createOptionFromOptional(
		LELodasoftDataAccessDbModelsConfigurationDefinedSmsTemplateModelIO,
		'definedSmsTemplate',
	),
	borrowerPortalContent: createOptionFromOptional(
		LELodasoftDataAccessDbModelsConfigurationBorrowerPortalContentModelIO,
		'borrowerPortalContent',
	),
	agentPortalContent: createOptionFromOptional(
		LELodasoftDataAccessDbModelsConfigurationAgentPortalContentModelIO,
		'agentPortalContent',
	),
	emailService: createOptionFromOptional(LELodasoftDataAccessDbModelsSharedEmailServiceModelIO, 'emailService'),
	smsService: createOptionFromOptional(LELodasoftDataAccessDbModelsSharedSmsServiceModelIO, 'smsService'),
	integrations: createOptionFromOptional(LELodasoftApiModelsSharedIntegrationsModelIO, 'integrations'),
	thirdPartyCredentials: createOptionFromOptional(
		array(LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModelIO),
		'thirdPartyCredentials',
	),
	company: createOptionFromOptional(LELodasoftDataAccessDbModelsConfigurationCompanyModelIO, 'company'),
});
