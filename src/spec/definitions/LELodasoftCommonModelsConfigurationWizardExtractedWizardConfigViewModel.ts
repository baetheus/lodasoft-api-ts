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
import { createOptionFromNullable } from 'io-ts-types';

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
	id: createOptionFromNullable(number, 'id'),
	name: createOptionFromNullable(string, 'name'),
	dataId: createOptionFromNullable(array(LELodasoftCommonModelsConfigurationWizardDataIdViewModelIO), 'dataId'),
	data: createOptionFromNullable(array(LELodasoftCommonModelsConfigurationWizardDataViewModelIO), 'data'),
	groupId: createOptionFromNullable(array(LELodasoftCommonModelsConfigurationWizardGroupIdViewModelIO), 'groupId'),
	group: createOptionFromNullable(array(LELodasoftCommonModelsConfigurationWizardGroupViewModelIO), 'group'),
	valid: createOptionFromNullable(array(LELodasoftCommonModelsConfigurationWizardValidViewModelIO), 'valid'),
	tree: createOptionFromNullable(array(LELodasoftCommonModelsConfigurationWizardTreeViewModelIO), 'tree'),
	question: createOptionFromNullable(
		array(LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModelIO),
		'question',
	),
});
