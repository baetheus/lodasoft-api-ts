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
	superAdmin: createOptionFromNullable(boolean, 'superAdmin'),
	admin: createOptionFromNullable(boolean, 'admin'),
	creditMonitoringEnabled: createOptionFromNullable(boolean, 'creditMonitoringEnabled'),
	creditReportingEnabled: createOptionFromNullable(boolean, 'creditReportingEnabled'),
	docEditingEnabled: createOptionFromNullable(boolean, 'docEditingEnabled'),
	docGenerationEnabled: createOptionFromNullable(boolean, 'docGenerationEnabled'),
	full1003Enabled: createOptionFromNullable(boolean, 'full1003Enabled'),
	inviteBorrowerCheckedByDefault: createOptionFromNullable(boolean, 'inviteBorrowerCheckedByDefault'),
	leadManagementEnabled: createOptionFromNullable(boolean, 'leadManagementEnabled'),
	multipleCredentialSupportEnabled: createOptionFromNullable(boolean, 'multipleCredentialSupportEnabled'),
	onlineApplicationEnabled: createOptionFromNullable(boolean, 'onlineApplicationEnabled'),
	prequalGenerationEnabled: createOptionFromNullable(boolean, 'prequalGenerationEnabled'),
	digitalAssetVerificationEnabled: createOptionFromNullable(boolean, 'digitalAssetVerificationEnabled'),
	digitalEmploymentVerificationEnabled: createOptionFromNullable(boolean, 'digitalEmploymentVerificationEnabled'),
	ausEnabled: createOptionFromNullable(boolean, 'ausEnabled'),
	losEnabled: createOptionFromNullable(boolean, 'losEnabled'),
	smsAlertsEnabled: createOptionFromNullable(boolean, 'smsAlertsEnabled'),
	showNewSubmissionForm: createOptionFromNullable(boolean, 'showNewSubmissionForm'),
	bulkEditTasks: createOptionFromNullable(boolean, 'bulkEditTasks'),
	readOnlyTasks: createOptionFromNullable(boolean, 'readOnlyTasks'),
	userNormal: createOptionFromNullable(boolean, 'userNormal'),
	companyId: createOptionFromNullable(number, 'companyId'),
	stackingOrderId: createOptionFromNullable(number, 'stackingOrderId'),
	userId: createOptionFromNullable(string, 'userId'),
	recentApplications: createOptionFromNullable(
		array(LELodasoftCommonModelsAdminRecentApplicationViewIO),
		'recentApplications',
	),
});
