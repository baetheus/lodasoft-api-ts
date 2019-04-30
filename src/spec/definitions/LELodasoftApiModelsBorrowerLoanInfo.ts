import {
	LELodasoftCommonModelsConfigurationApplicationViewModel,
	LELodasoftCommonModelsConfigurationApplicationViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationApplicationViewModel';
import {
	LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel,
	LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel';
import { Option } from 'fp-ts/lib/Option';
import { type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsBorrowerLoanInfo = {
	application: Option<LELodasoftCommonModelsConfigurationApplicationViewModel>;
	currentLoanInfo: Option<LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel>;
};
export const LELodasoftApiModelsBorrowerLoanInfoIO = type({
	application: createOptionFromNullable(LELodasoftCommonModelsConfigurationApplicationViewModelIO, 'application'),
	currentLoanInfo: createOptionFromNullable(
		LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModelIO,
		'currentLoanInfo',
	),
});
