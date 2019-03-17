import {
	LELodasoftCommonModelsConfigurationWizardValidViewModel,
	LELodasoftCommonModelsConfigurationWizardValidViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationWizardValidViewModel';
import {
	LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel,
	LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel';
import { Option } from 'fp-ts/lib/Option';
import { type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsWizardModelsWizardQuestionDataViewModel = {
	question: Option<LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel>;
	valid: Option<LELodasoftCommonModelsConfigurationWizardValidViewModel>;
};
export const LELodasoftApiModelsWizardModelsWizardQuestionDataViewModelIO = type({
	question: createOptionFromNullable(LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModelIO),
	valid: createOptionFromNullable(LELodasoftCommonModelsConfigurationWizardValidViewModelIO),
});
