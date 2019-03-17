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
	id: createOptionFromNullable(number),
	name: createOptionFromNullable(string),
	dataList: createOptionFromNullable(array(LELodasoftCommonModelsConfigurationWizardDataViewModelIO)),
});
