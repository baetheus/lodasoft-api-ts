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
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsBorrowerNewApplicationRequest = {
	application: Option<LELodasoftCommonModelsConfigurationApplicationViewModel>;
	internalContactGroupNumber: Option<string>;
	coBorrower: Option<LELodasoftDataAccessDbModelsAdminBorrowerModel>;
};
export const LELodasoftApiModelsBorrowerNewApplicationRequestIO = type({
	application: createOptionFromOptional(LELodasoftCommonModelsConfigurationApplicationViewModelIO, 'application'),
	internalContactGroupNumber: createOptionFromOptional(string, 'internalContactGroupNumber'),
	coBorrower: createOptionFromOptional(LELodasoftDataAccessDbModelsAdminBorrowerModelIO, 'coBorrower'),
});
