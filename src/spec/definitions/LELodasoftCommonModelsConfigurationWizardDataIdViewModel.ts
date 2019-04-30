import {
	LELodasoftCommonModelsConfigurationWizardDataViewModel,
	LELodasoftCommonModelsConfigurationWizardDataViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationWizardDataViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, array, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsConfigurationWizardDataIdViewModel = {
	id: Option<number>;
	name: Option<string>;
	dataList: Option<Array<LELodasoftCommonModelsConfigurationWizardDataViewModel>>;
};
export const LELodasoftCommonModelsConfigurationWizardDataIdViewModelIO = type({
	id: createOptionFromNullable(number, 'id'),
	name: createOptionFromNullable(string, 'name'),
	dataList: createOptionFromNullable(array(LELodasoftCommonModelsConfigurationWizardDataViewModelIO), 'dataList'),
});
