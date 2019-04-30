import {
	LELodasoftCommonModelsConfigurationApplicationViewModel,
	LELodasoftCommonModelsConfigurationApplicationViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationApplicationViewModel';
import {
	LELodasoftCommonModelsLoanLoanDocTaskViewModel,
	LELodasoftCommonModelsLoanLoanDocTaskViewModelIO,
} from '../definitions/LELodasoftCommonModelsLoanLoanDocTaskViewModel';
import { Option } from 'fp-ts/lib/Option';
import { array, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsBorrowerUpsertApplicationInfoView = {
	application: Option<LELodasoftCommonModelsConfigurationApplicationViewModel>;
	loanDocTasks: Option<Array<LELodasoftCommonModelsLoanLoanDocTaskViewModel>>;
};
export const LELodasoftApiModelsBorrowerUpsertApplicationInfoViewIO = type({
	application: createOptionFromNullable(LELodasoftCommonModelsConfigurationApplicationViewModelIO, 'application'),
	loanDocTasks: createOptionFromNullable(array(LELodasoftCommonModelsLoanLoanDocTaskViewModelIO), 'loanDocTasks'),
});
