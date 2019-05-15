import {
	LELodasoftApiModelsBorrowerBorrowerCharacteristicView,
	LELodasoftApiModelsBorrowerBorrowerCharacteristicViewIO,
} from '../definitions/LELodasoftApiModelsBorrowerBorrowerCharacteristicView';
import {
	LELodasoftCommonModelsLoanLoanDocTaskViewModel,
	LELodasoftCommonModelsLoanLoanDocTaskViewModelIO,
} from '../definitions/LELodasoftCommonModelsLoanLoanDocTaskViewModel';
import { Option } from 'fp-ts/lib/Option';
import { array, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsBorrowerUpsertBorrowerCharacteristicsView = {
	borrowerCharacteristics: Option<Array<LELodasoftApiModelsBorrowerBorrowerCharacteristicView>>;
	loanDocTasks: Option<Array<LELodasoftCommonModelsLoanLoanDocTaskViewModel>>;
};
export const LELodasoftApiModelsBorrowerUpsertBorrowerCharacteristicsViewIO = type({
	borrowerCharacteristics: createOptionFromOptional(
		array(LELodasoftApiModelsBorrowerBorrowerCharacteristicViewIO),
		'borrowerCharacteristics',
	),
	loanDocTasks: createOptionFromOptional(array(LELodasoftCommonModelsLoanLoanDocTaskViewModelIO), 'loanDocTasks'),
});
