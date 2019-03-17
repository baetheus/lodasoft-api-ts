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
	companyId: createOptionFromNullable(number),
	companyURL: createOptionFromNullable(string),
	borrowerURL: createOptionFromNullable(string),
	agentURL: createOptionFromNullable(string),
	companyGUID: createOptionFromNullable(string),
	companyName: createOptionFromNullable(string),
	address: createOptionFromNullable(string),
	city: createOptionFromNullable(string),
	state: createOptionFromNullable(string),
	zip: createOptionFromNullable(string),
	logo: createOptionFromNullable(string),
	signatureLogo: createOptionFromNullable(string),
	nmls: createOptionFromNullable(string),
	isTemplate: createOptionFromNullable(boolean),
	docEditingEnabled: createOptionFromNullable(boolean),
	docGenerationEnabled: createOptionFromNullable(boolean),
	full1003Enabled: createOptionFromNullable(boolean),
	leadManagementEnabled: createOptionFromNullable(boolean),
	onlineApplicationEnabled: createOptionFromNullable(boolean),
	digitalAssetVerificationEnabled: createOptionFromNullable(boolean),
	digitalEmploymentVerificationEnabled: createOptionFromNullable(boolean),
	prequalGenerationEnabled: createOptionFromNullable(boolean),
	smsAlertsEnabled: createOptionFromNullable(boolean),
	emailTestsEnabled: createOptionFromNullable(boolean),
	inviteBorrowerCheckedByDefault: createOptionFromNullable(boolean),
	creditMonitoringEnabled: createOptionFromNullable(boolean),
	creditReportingEnabled: createOptionFromNullable(boolean),
	ausEnabled: createOptionFromNullable(boolean),
	losEnabled: createOptionFromNullable(boolean),
	multipleCredentialSupportEnabled: createOptionFromNullable(boolean),
});
