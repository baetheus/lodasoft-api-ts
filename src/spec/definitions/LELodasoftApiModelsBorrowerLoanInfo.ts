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
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsBorrowerLoanInfo = {
	application: Option<LELodasoftCommonModelsConfigurationApplicationViewModel>;
	currentLoanInfo: Option<LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel>;
};
export const LELodasoftApiModelsBorrowerLoanInfoIO = type({
	application: createOptionFromOptional(LELodasoftCommonModelsConfigurationApplicationViewModelIO, 'application'),
	currentLoanInfo: createOptionFromOptional(
		LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModelIO,
		'currentLoanInfo',
	),
});
