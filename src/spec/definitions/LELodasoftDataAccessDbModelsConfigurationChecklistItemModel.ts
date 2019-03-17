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
	checkListItemId: createOptionFromNullable(number),
	checkListName: createOptionFromNullable(string),
	loanStatusId: createOptionFromNullable(number),
	loanStatus: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO),
	companyId: createOptionFromNullable(number),
	companyModel: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationCompanyModelIO),
});
