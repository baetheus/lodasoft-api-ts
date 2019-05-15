import {
	LELodasoftCommonModelsAdminRecentApplicationView,
	LELodasoftCommonModelsAdminRecentApplicationViewIO,
} from '../definitions/LELodasoftCommonModelsAdminRecentApplicationView';
import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, array, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	superAdmin: createOptionFromOptional(boolean, 'superAdmin'),
	admin: createOptionFromOptional(boolean, 'admin'),
	creditMonitoringEnabled: createOptionFromOptional(boolean, 'creditMonitoringEnabled'),
	creditReportingEnabled: createOptionFromOptional(boolean, 'creditReportingEnabled'),
	docEditingEnabled: createOptionFromOptional(boolean, 'docEditingEnabled'),
	docGenerationEnabled: createOptionFromOptional(boolean, 'docGenerationEnabled'),
	full1003Enabled: createOptionFromOptional(boolean, 'full1003Enabled'),
	inviteBorrowerCheckedByDefault: createOptionFromOptional(boolean, 'inviteBorrowerCheckedByDefault'),
	leadManagementEnabled: createOptionFromOptional(boolean, 'leadManagementEnabled'),
	multipleCredentialSupportEnabled: createOptionFromOptional(boolean, 'multipleCredentialSupportEnabled'),
	onlineApplicationEnabled: createOptionFromOptional(boolean, 'onlineApplicationEnabled'),
	prequalGenerationEnabled: createOptionFromOptional(boolean, 'prequalGenerationEnabled'),
	digitalAssetVerificationEnabled: createOptionFromOptional(boolean, 'digitalAssetVerificationEnabled'),
	digitalEmploymentVerificationEnabled: createOptionFromOptional(boolean, 'digitalEmploymentVerificationEnabled'),
	ausEnabled: createOptionFromOptional(boolean, 'ausEnabled'),
	losEnabled: createOptionFromOptional(boolean, 'losEnabled'),
	smsAlertsEnabled: createOptionFromOptional(boolean, 'smsAlertsEnabled'),
	showNewSubmissionForm: createOptionFromOptional(boolean, 'showNewSubmissionForm'),
	bulkEditTasks: createOptionFromOptional(boolean, 'bulkEditTasks'),
	readOnlyTasks: createOptionFromOptional(boolean, 'readOnlyTasks'),
	userNormal: createOptionFromOptional(boolean, 'userNormal'),
	companyId: createOptionFromOptional(number, 'companyId'),
	stackingOrderId: createOptionFromOptional(number, 'stackingOrderId'),
	userId: createOptionFromOptional(string, 'userId'),
	recentApplications: createOptionFromOptional(
		array(LELodasoftCommonModelsAdminRecentApplicationViewIO),
		'recentApplications',
	),
});
