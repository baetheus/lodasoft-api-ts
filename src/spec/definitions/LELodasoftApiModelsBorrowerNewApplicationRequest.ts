import {
	LELodasoftCommonModelsConfigurationApplicationViewModel,
	LELodasoftCommonModelsConfigurationApplicationViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationApplicationViewModel';
import {
	LELodasoftDataAccessDbModelsAdminBorrowerModel,
	LELodasoftDataAccessDbModelsAdminBorrowerModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsAdminBorrowerModel';
import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsBorrowerNewApplicationRequest = {
	application: Option<LELodasoftCommonModelsConfigurationApplicationViewModel>;
	internalContactGroupNumber: Option<string>;
	coBorrower: Option<LELodasoftDataAccessDbModelsAdminBorrowerModel>;
};
export const LELodasoftApiModelsBorrowerNewApplicationRequestIO = type({
	application: createOptionFromNullable(LELodasoftCommonModelsConfigurationApplicationViewModelIO),
	internalContactGroupNumber: createOptionFromNullable(string),
	coBorrower: createOptionFromNullable(LELodasoftDataAccessDbModelsAdminBorrowerModelIO),
});
