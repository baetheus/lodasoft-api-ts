import {
	LELodasoftCommonModelsAdminRecentApplicationView,
	LELodasoftCommonModelsAdminRecentApplicationViewIO,
} from '../definitions/LELodasoftCommonModelsAdminRecentApplicationView';
import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, array, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsAdminPermissionMenu = {
	superAdmin: Option<boolean>;
	admin: Option<boolean>;
	creditMonitoringEnabled: Option<boolean>;
	creditReportingEnabled: Option<boolean>;
	docEditingEnabled: Option<boolean>;
	docGenerationEnabled: Option<boolean>;
	full1003Enabled: Option<boolean>;
	inviteBorrowerCheckedByDefault: Option<boolean>;
	leadManagementEnabled: Option<boolean>;
	multipleCredentialSupportEnabled: Option<boolean>;
	onlineApplicationEnabled: Option<boolean>;
	prequalGenerationEnabled: Option<boolean>;
	digitalAssetVerificationEnabled: Option<boolean>;
	digitalEmploymentVerificationEnabled: Option<boolean>;
	ausEnabled: Option<boolean>;
	losEnabled: Option<boolean>;
	smsAlertsEnabled: Option<boolean>;
	showNewSubmissionForm: Option<boolean>;
	bulkEditTasks: Option<boolean>;
	readOnlyTasks: Option<boolean>;
	userNormal: Option<boolean>;
	companyId: Option<number>;
	stackingOrderId: Option<number>;
	userId: Option<string>;
	recentApplications: Option<Array<LELodasoftCommonModelsAdminRecentApplicationView>>;
};
export const LELodasoftApiModelsAdminPermissionMenuIO = type({
	superAdmin: createOptionFromNullable(boolean),
	admin: createOptionFromNullable(boolean),
	creditMonitoringEnabled: createOptionFromNullable(boolean),
	creditReportingEnabled: createOptionFromNullable(boolean),
	docEditingEnabled: createOptionFromNullable(boolean),
	docGenerationEnabled: createOptionFromNullable(boolean),
	full1003Enabled: createOptionFromNullable(boolean),
	inviteBorrowerCheckedByDefault: createOptionFromNullable(boolean),
	leadManagementEnabled: createOptionFromNullable(boolean),
	multipleCredentialSupportEnabled: createOptionFromNullable(boolean),
	onlineApplicationEnabled: createOptionFromNullable(boolean),
	prequalGenerationEnabled: createOptionFromNullable(boolean),
	digitalAssetVerificationEnabled: createOptionFromNullable(boolean),
	digitalEmploymentVerificationEnabled: createOptionFromNullable(boolean),
	ausEnabled: createOptionFromNullable(boolean),
	losEnabled: createOptionFromNullable(boolean),
	smsAlertsEnabled: createOptionFromNullable(boolean),
	showNewSubmissionForm: createOptionFromNullable(boolean),
	bulkEditTasks: createOptionFromNullable(boolean),
	readOnlyTasks: createOptionFromNullable(boolean),
	userNormal: createOptionFromNullable(boolean),
	companyId: createOptionFromNullable(number),
	stackingOrderId: createOptionFromNullable(number),
	userId: createOptionFromNullable(string),
	recentApplications: createOptionFromNullable(array(LELodasoftCommonModelsAdminRecentApplicationViewIO)),
});
