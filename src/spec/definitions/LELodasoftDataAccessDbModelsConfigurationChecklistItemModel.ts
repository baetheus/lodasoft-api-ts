import {
	LELodasoftDataAccessDbModelsConfigurationCompanyModel,
	LELodasoftDataAccessDbModelsConfigurationCompanyModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationCompanyModel';
import {
	LELodasoftDataAccessDbModelsConfigurationLoanStatusModel,
	LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationLoanStatusModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsConfigurationChecklistItemModel = {
	checkListItemId: Option<number>;
	checkListName: Option<string>;
	loanStatusId: Option<number>;
	loanStatus: Option<LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>;
	companyId: Option<number>;
	companyModel: Option<LELodasoftDataAccessDbModelsConfigurationCompanyModel>;
};
export const LELodasoftDataAccessDbModelsConfigurationChecklistItemModelIO = type({
	checkListItemId: createOptionFromNullable(number, 'checkListItemId'),
	checkListName: createOptionFromNullable(string, 'checkListName'),
	loanStatusId: createOptionFromNullable(number, 'loanStatusId'),
	loanStatus: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO, 'loanStatus'),
	companyId: createOptionFromNullable(number, 'companyId'),
	companyModel: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationCompanyModelIO, 'companyModel'),
});
