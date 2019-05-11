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
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftDataAccessDbModelsConfigurationChecklistItemModel = {
	checkListItemId: Option<number>;
	checkListName: Option<string>;
	loanStatusId: Option<number>;
	loanStatus: Option<LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>;
	companyId: Option<number>;
	companyModel: Option<LELodasoftDataAccessDbModelsConfigurationCompanyModel>;
};
export const LELodasoftDataAccessDbModelsConfigurationChecklistItemModelIO = type({
	checkListItemId: createOptionFromOptional(number, 'checkListItemId'),
	checkListName: createOptionFromOptional(string, 'checkListName'),
	loanStatusId: createOptionFromOptional(number, 'loanStatusId'),
	loanStatus: createOptionFromOptional(LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO, 'loanStatus'),
	companyId: createOptionFromOptional(number, 'companyId'),
	companyModel: createOptionFromOptional(LELodasoftDataAccessDbModelsConfigurationCompanyModelIO, 'companyModel'),
});
