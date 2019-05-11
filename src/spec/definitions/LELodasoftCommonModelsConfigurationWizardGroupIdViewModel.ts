import {
	LELodasoftCommonModelsConfigurationWizardGroupViewModel,
	LELodasoftCommonModelsConfigurationWizardGroupViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationWizardGroupViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, array, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsConfigurationWizardGroupIdViewModel = {
	id: Option<number>;
	name: Option<string>;
	propertyName: Option<string>;
	groupList: Option<Array<LELodasoftCommonModelsConfigurationWizardGroupViewModel>>;
};
export const LELodasoftCommonModelsConfigurationWizardGroupIdViewModelIO = type({
	id: createOptionFromOptional(number, 'id'),
	name: createOptionFromOptional(string, 'name'),
	propertyName: createOptionFromOptional(string, 'propertyName'),
	groupList: createOptionFromOptional(array(LELodasoftCommonModelsConfigurationWizardGroupViewModelIO), 'groupList'),
});
