import {
	LELodasoftApiModelsBorrowerBorrowerCharacteristicView,
	LELodasoftApiModelsBorrowerBorrowerCharacteristicViewIO,
} from '../definitions/LELodasoftApiModelsBorrowerBorrowerCharacteristicView';
import {
	LELodasoftCommonModelsMortgageMortgageViewModel,
	LELodasoftCommonModelsMortgageMortgageViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageMortgageViewModel';
import { Option } from 'fp-ts/lib/Option';
import { string, number, dictionary, array, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsMortgageProcessDuViewModel = {
	mortgageViewModel: Option<LELodasoftCommonModelsMortgageMortgageViewModel>;
	loanNumber: Option<string>;
	losIdentifier: Option<string>;
	credentialId: Option<number>;
	linkBorrowers: Option<{ [key: string]: number }>;
	loanCharacteristics: Option<Array<number>>;
	borrowerCharacteristics: Option<Array<LELodasoftApiModelsBorrowerBorrowerCharacteristicView>>;
	loanPurposeId: Option<number>;
	loanTypeId: Option<number>;
	alignmentGroupId: Option<string>;
};
export const LELodasoftApiModelsMortgageProcessDuViewModelIO = type({
	mortgageViewModel: createOptionFromOptional(LELodasoftCommonModelsMortgageMortgageViewModelIO, 'mortgageViewModel'),
	loanNumber: createOptionFromOptional(string, 'loanNumber'),
	losIdentifier: createOptionFromOptional(string, 'losIdentifier'),
	credentialId: createOptionFromOptional(number, 'credentialId'),
	linkBorrowers: createOptionFromOptional(dictionary(string, number), 'linkBorrowers'),
	loanCharacteristics: createOptionFromOptional(array(number), 'loanCharacteristics'),
	borrowerCharacteristics: createOptionFromOptional(
		array(LELodasoftApiModelsBorrowerBorrowerCharacteristicViewIO),
		'borrowerCharacteristics',
	),
	loanPurposeId: createOptionFromOptional(number, 'loanPurposeId'),
	loanTypeId: createOptionFromOptional(number, 'loanTypeId'),
	alignmentGroupId: createOptionFromOptional(string, 'alignmentGroupId'),
});
