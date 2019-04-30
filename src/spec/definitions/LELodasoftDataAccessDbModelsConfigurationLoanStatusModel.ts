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
	loanStatusId: createOptionFromNullable(number, 'loanStatusId'),
	loanStatusName: createOptionFromNullable(string, 'loanStatusName'),
	selectByRole: createOptionFromNullable(string, 'selectByRole'),
	order: createOptionFromNullable(number, 'order'),
	showAsArchive: createOptionFromNullable(boolean, 'showAsArchive'),
	hideFromCounter: createOptionFromNullable(boolean, 'hideFromCounter'),
	isLeadStatus: createOptionFromNullable(boolean, 'isLeadStatus'),
	emailFromRoleId: createOptionFromNullable(number, 'emailFromRoleId'),
	roleModel: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationRoleModelIO, 'roleModel'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
