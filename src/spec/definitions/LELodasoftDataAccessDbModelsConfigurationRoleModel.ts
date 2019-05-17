import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftDataAccessDbModelsConfigurationRoleModel = {
	roleId: Option<number>;
	roleName: Option<string>;
	isLoanContact: Option<boolean>;
	order: Option<number>;
	allowAccessAllLoans: Option<boolean>;
	allowBorrowerAssignment: Option<boolean>;
	showOnPortals: Option<boolean>;
	showNewSubmissionForm: Option<boolean>;
	bulkEditTasks: Option<boolean>;
	readOnlyTasks: Option<boolean>;
	useForCreditMonitoring: Option<boolean>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftDataAccessDbModelsConfigurationRoleModelIO = type({
	roleId: createOptionFromOptional(number, 'roleId'),
	roleName: createOptionFromOptional(string, 'roleName'),
	isLoanContact: createOptionFromOptional(boolean, 'isLoanContact'),
	order: createOptionFromOptional(number, 'order'),
	allowAccessAllLoans: createOptionFromOptional(boolean, 'allowAccessAllLoans'),
	allowBorrowerAssignment: createOptionFromOptional(boolean, 'allowBorrowerAssignment'),
	showOnPortals: createOptionFromOptional(boolean, 'showOnPortals'),
	showNewSubmissionForm: createOptionFromOptional(boolean, 'showNewSubmissionForm'),
	bulkEditTasks: createOptionFromOptional(boolean, 'bulkEditTasks'),
	readOnlyTasks: createOptionFromOptional(boolean, 'readOnlyTasks'),
	useForCreditMonitoring: createOptionFromOptional(boolean, 'useForCreditMonitoring'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromDatelike, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromDatelike, 'dateUpdated'),
});
