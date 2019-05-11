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
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
	mortgageViewModel: createOptionFromOptional(LELodasoftCommonModelsMortgageMortgageViewModelIO, 'mortgageViewModel'),
	suggestedBorrowers: createOptionFromOptional(
		dictionary(string, array(LELodasoftDataAccessModelsAdminBorrowerBorrowerDtoIO)),
		'suggestedBorrowers',
	),
	loanNumber: createOptionFromOptional(string, 'loanNumber'),
	loanPurposeId: createOptionFromOptional(number, 'loanPurposeId'),
	loanTypeId: createOptionFromOptional(number, 'loanTypeId'),
	losIdentifier: createOptionFromOptional(string, 'losIdentifier'),
	success: createOptionFromOptional(boolean, 'success'),
	validationErrors: createOptionFromOptional(array(string), 'validationErrors'),
	errorMessage: createOptionFromOptional(string, 'errorMessage'),
});
