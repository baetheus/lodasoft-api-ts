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
	roleId: createOptionFromNullable(number),
	roleName: createOptionFromNullable(string),
	isLoanContact: createOptionFromNullable(boolean),
	order: createOptionFromNullable(number),
	allowAccessAllLoans: createOptionFromNullable(boolean),
	allowBorrowerAssignment: createOptionFromNullable(boolean),
	showOnPortals: createOptionFromNullable(boolean),
	showNewSubmissionForm: createOptionFromNullable(boolean),
	bulkEditTasks: createOptionFromNullable(boolean),
	readOnlyTasks: createOptionFromNullable(boolean),
	useForCreditMonitoring: createOptionFromNullable(boolean),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
