import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

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
	roleId: createOptionFromNullable(number, 'roleId'),
	roleName: createOptionFromNullable(string, 'roleName'),
	isLoanContact: createOptionFromNullable(boolean, 'isLoanContact'),
	order: createOptionFromNullable(number, 'order'),
	allowAccessAllLoans: createOptionFromNullable(boolean, 'allowAccessAllLoans'),
	allowBorrowerAssignment: createOptionFromNullable(boolean, 'allowBorrowerAssignment'),
	showOnPortals: createOptionFromNullable(boolean, 'showOnPortals'),
	showNewSubmissionForm: createOptionFromNullable(boolean, 'showNewSubmissionForm'),
	bulkEditTasks: createOptionFromNullable(boolean, 'bulkEditTasks'),
	readOnlyTasks: createOptionFromNullable(boolean, 'readOnlyTasks'),
	useForCreditMonitoring: createOptionFromNullable(boolean, 'useForCreditMonitoring'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
