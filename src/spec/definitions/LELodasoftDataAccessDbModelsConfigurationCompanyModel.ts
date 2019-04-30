import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

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
	companyId: createOptionFromNullable(number, 'companyId'),
	companyURL: createOptionFromNullable(string, 'companyURL'),
	borrowerURL: createOptionFromNullable(string, 'borrowerURL'),
	agentURL: createOptionFromNullable(string, 'agentURL'),
	companyGUID: createOptionFromNullable(string, 'companyGUID'),
	companyName: createOptionFromNullable(string, 'companyName'),
	address: createOptionFromNullable(string, 'address'),
	city: createOptionFromNullable(string, 'city'),
	state: createOptionFromNullable(string, 'state'),
	zip: createOptionFromNullable(string, 'zip'),
	logo: createOptionFromNullable(string, 'logo'),
	smallLogo: createOptionFromNullable(string, 'smallLogo'),
	signatureLogo: createOptionFromNullable(string, 'signatureLogo'),
	nmls: createOptionFromNullable(string, 'nmls'),
	isTemplate: createOptionFromNullable(boolean, 'isTemplate'),
	docEditingEnabled: createOptionFromNullable(boolean, 'docEditingEnabled'),
	docGenerationEnabled: createOptionFromNullable(boolean, 'docGenerationEnabled'),
	full1003Enabled: createOptionFromNullable(boolean, 'full1003Enabled'),
	leadManagementEnabled: createOptionFromNullable(boolean, 'leadManagementEnabled'),
	onlineApplicationEnabled: createOptionFromNullable(boolean, 'onlineApplicationEnabled'),
	digitalAssetVerificationEnabled: createOptionFromNullable(boolean, 'digitalAssetVerificationEnabled'),
	digitalEmploymentVerificationEnabled: createOptionFromNullable(boolean, 'digitalEmploymentVerificationEnabled'),
	prequalGenerationEnabled: createOptionFromNullable(boolean, 'prequalGenerationEnabled'),
	smsAlertsEnabled: createOptionFromNullable(boolean, 'smsAlertsEnabled'),
	emailTestsEnabled: createOptionFromNullable(boolean, 'emailTestsEnabled'),
	inviteBorrowerCheckedByDefault: createOptionFromNullable(boolean, 'inviteBorrowerCheckedByDefault'),
	creditMonitoringEnabled: createOptionFromNullable(boolean, 'creditMonitoringEnabled'),
	creditReportingEnabled: createOptionFromNullable(boolean, 'creditReportingEnabled'),
	ausEnabled: createOptionFromNullable(boolean, 'ausEnabled'),
	losEnabled: createOptionFromNullable(boolean, 'losEnabled'),
	multipleCredentialSupportEnabled: createOptionFromNullable(boolean, 'multipleCredentialSupportEnabled'),
});
