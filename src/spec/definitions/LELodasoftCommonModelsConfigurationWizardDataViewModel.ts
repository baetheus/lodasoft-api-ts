import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsConfigurationWizardDataViewModel = {
	id: Option<number>;
	dataId: Option<number>;
	value: Option<string>;
	name: Option<string>;
	buttonImage: Option<string>;
};
export const LELodasoftCommonModelsConfigurationWizardDataViewModelIO = type({
	id: createOptionFromOptional(number, 'id'),
	dataId: createOptionFromOptional(number, 'dataId'),
	value: createOptionFromOptional(string, 'value'),
	name: createOptionFromOptional(string, 'name'),
	buttonImage: createOptionFromOptional(string, 'buttonImage'),
});
