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
import { createOptionFromNullable } from 'io-ts-types';

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
	sessionTimeout: createOptionFromNullable(
		LELodasoftCommonModelsConfigurationConfigurationViewModelIO,
		'sessionTimeout',
	),
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
	documentExportFormat: createOptionFromNullable(
		LELodasoftCommonModelsConfigurationConfigurationViewModelIO,
		'documentExportFormat',
	),
	digitalAssetVerificationEnabled: createOptionFromNullable(
		LELodasoftCommonModelsConfigurationConfigurationViewModelIO,
		'digitalAssetVerificationEnabled',
	),
	digitalEmploymentVerificationEnabled: createOptionFromNullable(
		LELodasoftCommonModelsConfigurationConfigurationViewModelIO,
		'digitalEmploymentVerificationEnabled',
	),
	creditReportingEnabled: createOptionFromNullable(
		LELodasoftCommonModelsConfigurationConfigurationViewModelIO,
		'creditReportingEnabled',
	),
	ausEnabled: createOptionFromNullable(LELodasoftCommonModelsConfigurationConfigurationViewModelIO, 'ausEnabled'),
	losEnabled: createOptionFromNullable(LELodasoftCommonModelsConfigurationConfigurationViewModelIO, 'losEnabled'),
	defaultCreditVendor: createOptionFromNullable(
		LELodasoftCommonModelsConfigurationConfigurationViewModelIO,
		'defaultCreditVendor',
	),
	prequalGenerationSettings: createOptionFromNullable(
		LELodasoftDataAccessDbModelsConfigurationPrequalGenerationSettingsModelIO,
		'prequalGenerationSettings',
	),
	onlineApplicationSettings: createOptionFromNullable(
		LELodasoftDataAccessDbModelsConfigurationOnlineApplicationSettingsModelIO,
		'onlineApplicationSettings',
	),
	definedEmailTemplate: createOptionFromNullable(
		LELodasoftCommonModelsEmailDefinedEmailTemplateViewModelIO,
		'definedEmailTemplate',
	),
	definedSmsTemplate: createOptionFromNullable(
		LELodasoftDataAccessDbModelsConfigurationDefinedSmsTemplateModelIO,
		'definedSmsTemplate',
	),
	borrowerPortalContent: createOptionFromNullable(
		LELodasoftDataAccessDbModelsConfigurationBorrowerPortalContentModelIO,
		'borrowerPortalContent',
	),
	agentPortalContent: createOptionFromNullable(
		LELodasoftDataAccessDbModelsConfigurationAgentPortalContentModelIO,
		'agentPortalContent',
	),
	emailService: createOptionFromNullable(LELodasoftDataAccessDbModelsSharedEmailServiceModelIO, 'emailService'),
	smsService: createOptionFromNullable(LELodasoftDataAccessDbModelsSharedSmsServiceModelIO, 'smsService'),
	integrations: createOptionFromNullable(LELodasoftApiModelsSharedIntegrationsModelIO, 'integrations'),
	thirdPartyCredentials: createOptionFromNullable(
		array(LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModelIO),
		'thirdPartyCredentials',
	),
	company: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationCompanyModelIO, 'company'),
});
