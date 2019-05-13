import { Option } from 'fp-ts/lib/Option';
import { type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

import {
	LELodasoftCommonModelsConfigurationApplicationViewModel,
	LELodasoftCommonModelsConfigurationApplicationViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationApplicationViewModel';
import {
	LELodasoftCommonModelsMortgageMortgageViewModel,
	LELodasoftCommonModelsMortgageMortgageViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageMortgageViewModel';

export type LELodasoftApiModelsBorrowerOnlineAppUpdateReturnModel = {
	applicationViewModel: Option<LELodasoftCommonModelsConfigurationApplicationViewModel>;
	mortgageViewModel: Option<LELodasoftCommonModelsMortgageMortgageViewModel>;
};
export const LELodasoftApiModelsBorrowerOnlineAppUpdateReturnModelIO = type({
	applicationViewModel: createOptionFromNullable(
		LELodasoftCommonModelsConfigurationApplicationViewModelIO,
		'applicationViewModel',
	),
	mortgageViewModel: createOptionFromNullable(LELodasoftCommonModelsMortgageMortgageViewModelIO, 'mortgageViewModel'),
});
