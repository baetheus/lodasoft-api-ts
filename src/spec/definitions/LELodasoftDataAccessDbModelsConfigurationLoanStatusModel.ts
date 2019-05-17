import {
	LELodasoftDataAccessDbModelsConfigurationRoleModel,
	LELodasoftDataAccessDbModelsConfigurationRoleModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationRoleModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	loanStatusId: createOptionFromOptional(number, 'loanStatusId'),
	loanStatusName: createOptionFromOptional(string, 'loanStatusName'),
	selectByRole: createOptionFromOptional(string, 'selectByRole'),
	order: createOptionFromOptional(number, 'order'),
	showAsArchive: createOptionFromOptional(boolean, 'showAsArchive'),
	hideFromCounter: createOptionFromOptional(boolean, 'hideFromCounter'),
	isLeadStatus: createOptionFromOptional(boolean, 'isLeadStatus'),
	emailFromRoleId: createOptionFromOptional(number, 'emailFromRoleId'),
	roleModel: createOptionFromOptional(LELodasoftDataAccessDbModelsConfigurationRoleModelIO, 'roleModel'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromDatelike, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromDatelike, 'dateUpdated'),
});
