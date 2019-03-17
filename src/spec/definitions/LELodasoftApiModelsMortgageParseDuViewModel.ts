import {
	LELodasoftCommonModelsMortgageMortgageViewModel,
	LELodasoftCommonModelsMortgageMortgageViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageMortgageViewModel';
import {
	LELodasoftDataAccessModelsAdminBorrowerBorrowerDto,
	LELodasoftDataAccessModelsAdminBorrowerBorrowerDtoIO,
} from '../definitions/LELodasoftDataAccessModelsAdminBorrowerBorrowerDto';
import { Option } from 'fp-ts/lib/Option';
import { array, string, dictionary, boolean, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsMortgageParseDuViewModel = {
	mortgageViewModel: Option<LELodasoftCommonModelsMortgageMortgageViewModel>;
	suggestedBorrowers: Option<{ [key: string]: Array<LELodasoftDataAccessModelsAdminBorrowerBorrowerDto> }>;
	loanNumber: Option<string>;
	losIdentifier: Option<string>;
	success: Option<boolean>;
	validationErrors: Option<Array<string>>;
	errorMessage: Option<string>;
};
export const LELodasoftApiModelsMortgageParseDuViewModelIO = type({
	mortgageViewModel: createOptionFromNullable(LELodasoftCommonModelsMortgageMortgageViewModelIO),
	suggestedBorrowers: createOptionFromNullable(
		dictionary(string, array(LELodasoftDataAccessModelsAdminBorrowerBorrowerDtoIO)),
	),
	loanNumber: createOptionFromNullable(string),
	losIdentifier: createOptionFromNullable(string),
	success: createOptionFromNullable(boolean),
	validationErrors: createOptionFromNullable(array(string)),
	errorMessage: createOptionFromNullable(string),
});
