import {
	LELodasoftCommonModelsConfigurationWizardGroupViewModel,
	LELodasoftCommonModelsConfigurationWizardGroupViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationWizardGroupViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, array, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsConfigurationWizardGroupIdViewModel = {
	id: Option<number>;
	name: Option<string>;
	propertyName: Option<string>;
	groupList: Option<Array<LELodasoftCommonModelsConfigurationWizardGroupViewModel>>;
};
export const LELodasoftCommonModelsConfigurationWizardGroupIdViewModelIO = type({
	id: createOptionFromNullable(number),
	name: createOptionFromNullable(string),
	propertyName: createOptionFromNullable(string),
	groupList: createOptionFromNullable(array(LELodasoftCommonModelsConfigurationWizardGroupViewModelIO)),
});
