import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftDataAccessDbModelsConfigurationCompanyModel = {
	companyId: Option<number>;
	companyURL: Option<string>;
	borrowerURL: Option<string>;
	agentURL: Option<string>;
	companyGUID: Option<string>;
	companyName: Option<string>;
	address: Option<string>;
	city: Option<string>;
	state: Option<string>;
	zip: Option<string>;
	logo: Option<string>;
	smallLogo: Option<string>;
	signatureLogo: Option<string>;
	nmls: Option<string>;
	isTemplate: Option<boolean>;
	docEditingEnabled: Option<boolean>;
	docGenerationEnabled: Option<boolean>;
	full1003Enabled: Option<boolean>;
	leadManagementEnabled: Option<boolean>;
	onlineApplicationEnabled: Option<boolean>;
	digitalAssetVerificationEnabled: Option<boolean>;
	digitalEmploymentVerificationEnabled: Option<boolean>;
	prequalGenerationEnabled: Option<boolean>;
	smsAlertsEnabled: Option<boolean>;
	emailTestsEnabled: Option<boolean>;
	inviteBorrowerCheckedByDefault: Option<boolean>;
	creditMonitoringEnabled: Option<boolean>;
	creditReportingEnabled: Option<boolean>;
	ausEnabled: Option<boolean>;
	losEnabled: Option<boolean>;
	multipleCredentialSupportEnabled: Option<boolean>;
};
export const LELodasoftDataAccessDbModelsConfigurationCompanyModelIO = type({
	companyId: createOptionFromOptional(number, 'companyId'),
	companyURL: createOptionFromOptional(string, 'companyURL'),
	borrowerURL: createOptionFromOptional(string, 'borrowerURL'),
	agentURL: createOptionFromOptional(string, 'agentURL'),
	companyGUID: createOptionFromOptional(string, 'companyGUID'),
	companyName: createOptionFromOptional(string, 'companyName'),
	address: createOptionFromOptional(string, 'address'),
	city: createOptionFromOptional(string, 'city'),
	state: createOptionFromOptional(string, 'state'),
	zip: createOptionFromOptional(string, 'zip'),
	logo: createOptionFromOptional(string, 'logo'),
	smallLogo: createOptionFromOptional(string, 'smallLogo'),
	signatureLogo: createOptionFromOptional(string, 'signatureLogo'),
	nmls: createOptionFromOptional(string, 'nmls'),
	isTemplate: createOptionFromOptional(boolean, 'isTemplate'),
	docEditingEnabled: createOptionFromOptional(boolean, 'docEditingEnabled'),
	docGenerationEnabled: createOptionFromOptional(boolean, 'docGenerationEnabled'),
	full1003Enabled: createOptionFromOptional(boolean, 'full1003Enabled'),
	leadManagementEnabled: createOptionFromOptional(boolean, 'leadManagementEnabled'),
	onlineApplicationEnabled: createOptionFromOptional(boolean, 'onlineApplicationEnabled'),
	digitalAssetVerificationEnabled: createOptionFromOptional(boolean, 'digitalAssetVerificationEnabled'),
	digitalEmploymentVerificationEnabled: createOptionFromOptional(boolean, 'digitalEmploymentVerificationEnabled'),
	prequalGenerationEnabled: createOptionFromOptional(boolean, 'prequalGenerationEnabled'),
	smsAlertsEnabled: createOptionFromOptional(boolean, 'smsAlertsEnabled'),
	emailTestsEnabled: createOptionFromOptional(boolean, 'emailTestsEnabled'),
	inviteBorrowerCheckedByDefault: createOptionFromOptional(boolean, 'inviteBorrowerCheckedByDefault'),
	creditMonitoringEnabled: createOptionFromOptional(boolean, 'creditMonitoringEnabled'),
	creditReportingEnabled: createOptionFromOptional(boolean, 'creditReportingEnabled'),
	ausEnabled: createOptionFromOptional(boolean, 'ausEnabled'),
	losEnabled: createOptionFromOptional(boolean, 'losEnabled'),
	multipleCredentialSupportEnabled: createOptionFromOptional(boolean, 'multipleCredentialSupportEnabled'),
});
