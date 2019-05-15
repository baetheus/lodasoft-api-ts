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
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsBorrowerUpsertApplicationInfoView = {
	application: Option<LELodasoftCommonModelsConfigurationApplicationViewModel>;
	loanDocTasks: Option<Array<LELodasoftCommonModelsLoanLoanDocTaskViewModel>>;
};
export const LELodasoftApiModelsBorrowerUpsertApplicationInfoViewIO = type({
	application: createOptionFromOptional(LELodasoftCommonModelsConfigurationApplicationViewModelIO, 'application'),
	loanDocTasks: createOptionFromOptional(array(LELodasoftCommonModelsLoanLoanDocTaskViewModelIO), 'loanDocTasks'),
});
