import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsConfigurationWizardDataViewModel = {
	id: Option<number>;
	dataId: Option<number>;
	value: Option<string>;
	name: Option<string>;
	buttonImage: Option<string>;
};
export const LELodasoftCommonModelsConfigurationWizardDataViewModelIO = type({
	id: createOptionFromNullable(number),
	dataId: createOptionFromNullable(number),
	value: createOptionFromNullable(string),
	name: createOptionFromNullable(string),
	buttonImage: createOptionFromNullable(string),
});
