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
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsWizardModelsWizardQuestionDataViewModel = {
	question: Option<LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel>;
	valid: Option<LELodasoftCommonModelsConfigurationWizardValidViewModel>;
};
export const LELodasoftApiModelsWizardModelsWizardQuestionDataViewModelIO = type({
	question: createOptionFromOptional(LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModelIO, 'question'),
	valid: createOptionFromOptional(LELodasoftCommonModelsConfigurationWizardValidViewModelIO, 'valid'),
});
