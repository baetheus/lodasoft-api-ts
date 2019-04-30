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
import { createOptionFromNullable } from 'io-ts-types';

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
	mortgageViewModel: createOptionFromNullable(LELodasoftCommonModelsMortgageMortgageViewModelIO, 'mortgageViewModel'),
	loanNumber: createOptionFromNullable(string, 'loanNumber'),
	losIdentifier: createOptionFromNullable(string, 'losIdentifier'),
	credentialId: createOptionFromNullable(number, 'credentialId'),
	linkBorrowers: createOptionFromNullable(dictionary(string, number), 'linkBorrowers'),
	loanCharacteristics: createOptionFromNullable(array(number), 'loanCharacteristics'),
	borrowerCharacteristics: createOptionFromNullable(
		array(LELodasoftApiModelsBorrowerBorrowerCharacteristicViewIO),
		'borrowerCharacteristics',
	),
	loanPurposeId: createOptionFromNullable(number, 'loanPurposeId'),
	loanTypeId: createOptionFromNullable(number, 'loanTypeId'),
	alignmentGroupId: createOptionFromNullable(string, 'alignmentGroupId'),
});
