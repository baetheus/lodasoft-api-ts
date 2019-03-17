import {
	LELodasoftApiModelsBorrowerLoanCharacteristicView,
	LELodasoftApiModelsBorrowerLoanCharacteristicViewIO,
} from '../definitions/LELodasoftApiModelsBorrowerLoanCharacteristicView';
import {
	LELodasoftCommonModelsLoanLoanDocTaskViewModel,
	LELodasoftCommonModelsLoanLoanDocTaskViewModelIO,
} from '../definitions/LELodasoftCommonModelsLoanLoanDocTaskViewModel';
import { Option } from 'fp-ts/lib/Option';
import { array, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsBorrowerUpsertLoanCharacteristicView = {
	loanCharacteristic: Option<LELodasoftApiModelsBorrowerLoanCharacteristicView>;
	loanDocTasks: Option<Array<LELodasoftCommonModelsLoanLoanDocTaskViewModel>>;
};
export const LELodasoftApiModelsBorrowerUpsertLoanCharacteristicViewIO = type({
	loanCharacteristic: createOptionFromNullable(LELodasoftApiModelsBorrowerLoanCharacteristicViewIO),
	loanDocTasks: createOptionFromNullable(array(LELodasoftCommonModelsLoanLoanDocTaskViewModelIO)),
});
