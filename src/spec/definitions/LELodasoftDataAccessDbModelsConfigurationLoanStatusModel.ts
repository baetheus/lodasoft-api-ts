import {
	LELodasoftDataAccessDbModelsConfigurationRoleModel,
	LELodasoftDataAccessDbModelsConfigurationRoleModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationRoleModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsConfigurationLoanStatusModel = {
	loanStatusId: Option<number>;
	loanStatusName: Option<string>;
	selectByRole: Option<string>;
	order: Option<number>;
	showAsArchive: Option<boolean>;
	hideFromCounter: Option<boolean>;
	isLeadStatus: Option<boolean>;
	emailFromRoleId: Option<number>;
	roleModel: Option<LELodasoftDataAccessDbModelsConfigurationRoleModel>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO = type({
	loanStatusId: createOptionFromNullable(number),
	loanStatusName: createOptionFromNullable(string),
	selectByRole: createOptionFromNullable(string),
	order: createOptionFromNullable(number),
	showAsArchive: createOptionFromNullable(boolean),
	hideFromCounter: createOptionFromNullable(boolean),
	isLeadStatus: createOptionFromNullable(boolean),
	emailFromRoleId: createOptionFromNullable(number),
	roleModel: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationRoleModelIO),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
