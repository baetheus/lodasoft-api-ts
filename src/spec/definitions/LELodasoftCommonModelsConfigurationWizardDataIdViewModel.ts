import {
	LELodasoftCommonModelsConfigurationWizardDataViewModel,
	LELodasoftCommonModelsConfigurationWizardDataViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationWizardDataViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, array, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsConfigurationWizardDataIdViewModel = {
	id: Option<number>;
	name: Option<string>;
	dataList: Option<Array<LELodasoftCommonModelsConfigurationWizardDataViewModel>>;
};
export const LELodasoftCommonModelsConfigurationWizardDataIdViewModelIO = type({
	id: createOptionFromOptional(number, 'id'),
	name: createOptionFromOptional(string, 'name'),
	dataList: createOptionFromOptional(array(LELodasoftCommonModelsConfigurationWizardDataViewModelIO), 'dataList'),
});
