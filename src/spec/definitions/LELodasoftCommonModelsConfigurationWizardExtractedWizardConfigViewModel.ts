import {
	LELodasoftCommonModelsConfigurationWizardDataIdViewModel,
	LELodasoftCommonModelsConfigurationWizardDataIdViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationWizardDataIdViewModel';
import {
	LELodasoftCommonModelsConfigurationWizardDataViewModel,
	LELodasoftCommonModelsConfigurationWizardDataViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationWizardDataViewModel';
import {
	LELodasoftCommonModelsConfigurationWizardGroupIdViewModel,
	LELodasoftCommonModelsConfigurationWizardGroupIdViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationWizardGroupIdViewModel';
import {
	LELodasoftCommonModelsConfigurationWizardGroupViewModel,
	LELodasoftCommonModelsConfigurationWizardGroupViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationWizardGroupViewModel';
import {
	LELodasoftCommonModelsConfigurationWizardTreeViewModel,
	LELodasoftCommonModelsConfigurationWizardTreeViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationWizardTreeViewModel';
import {
	LELodasoftCommonModelsConfigurationWizardValidViewModel,
	LELodasoftCommonModelsConfigurationWizardValidViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationWizardValidViewModel';
import {
	LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel,
	LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, array, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel = {
	id: Option<number>;
	name: Option<string>;
	dataId: Option<Array<LELodasoftCommonModelsConfigurationWizardDataIdViewModel>>;
	data: Option<Array<LELodasoftCommonModelsConfigurationWizardDataViewModel>>;
	groupId: Option<Array<LELodasoftCommonModelsConfigurationWizardGroupIdViewModel>>;
	group: Option<Array<LELodasoftCommonModelsConfigurationWizardGroupViewModel>>;
	valid: Option<Array<LELodasoftCommonModelsConfigurationWizardValidViewModel>>;
	tree: Option<Array<LELodasoftCommonModelsConfigurationWizardTreeViewModel>>;
	question: Option<Array<LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel>>;
};
export const LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModelIO = type({
	id: createOptionFromOptional(number, 'id'),
	name: createOptionFromOptional(string, 'name'),
	dataId: createOptionFromOptional(array(LELodasoftCommonModelsConfigurationWizardDataIdViewModelIO), 'dataId'),
	data: createOptionFromOptional(array(LELodasoftCommonModelsConfigurationWizardDataViewModelIO), 'data'),
	groupId: createOptionFromOptional(array(LELodasoftCommonModelsConfigurationWizardGroupIdViewModelIO), 'groupId'),
	group: createOptionFromOptional(array(LELodasoftCommonModelsConfigurationWizardGroupViewModelIO), 'group'),
	valid: createOptionFromOptional(array(LELodasoftCommonModelsConfigurationWizardValidViewModelIO), 'valid'),
	tree: createOptionFromOptional(array(LELodasoftCommonModelsConfigurationWizardTreeViewModelIO), 'tree'),
	question: createOptionFromOptional(
		array(LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModelIO),
		'question',
	),
});
