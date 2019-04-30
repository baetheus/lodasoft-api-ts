import {
	LELodasoftCommonModelsMortgageMortgageViewModel,
	LELodasoftCommonModelsMortgageMortgageViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageMortgageViewModel';
import {
	LELodasoftDataAccessModelsAdminBorrowerBorrowerDto,
	LELodasoftDataAccessModelsAdminBorrowerBorrowerDtoIO,
} from '../definitions/LELodasoftDataAccessModelsAdminBorrowerBorrowerDto';
import { Option } from 'fp-ts/lib/Option';
import { array, string, dictionary, number, boolean, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsMortgageParseDuViewModel = {
	mortgageViewModel: Option<LELodasoftCommonModelsMortgageMortgageViewModel>;
	suggestedBorrowers: Option<{ [key: string]: Array<LELodasoftDataAccessModelsAdminBorrowerBorrowerDto> }>;
	loanNumber: Option<string>;
	loanPurposeId: Option<number>;
	loanTypeId: Option<number>;
	losIdentifier: Option<string>;
	success: Option<boolean>;
	validationErrors: Option<Array<string>>;
	errorMessage: Option<string>;
};
export const LELodasoftApiModelsMortgageParseDuViewModelIO = type({
	mortgageViewModel: createOptionFromNullable(LELodasoftCommonModelsMortgageMortgageViewModelIO, 'mortgageViewModel'),
	suggestedBorrowers: createOptionFromNullable(
		dictionary(string, array(LELodasoftDataAccessModelsAdminBorrowerBorrowerDtoIO)),
		'suggestedBorrowers',
	),
	loanNumber: createOptionFromNullable(string, 'loanNumber'),
	loanPurposeId: createOptionFromNullable(number, 'loanPurposeId'),
	loanTypeId: createOptionFromNullable(number, 'loanTypeId'),
	losIdentifier: createOptionFromNullable(string, 'losIdentifier'),
	success: createOptionFromNullable(boolean, 'success'),
	validationErrors: createOptionFromNullable(array(string), 'validationErrors'),
	errorMessage: createOptionFromNullable(string, 'errorMessage'),
});
