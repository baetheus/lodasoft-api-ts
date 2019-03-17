import {
	LELodasoftCommonModelsConfigurationWizardDataViewModel,
	LELodasoftCommonModelsConfigurationWizardDataViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationWizardDataViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, array, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsConfigurationWizardTreeViewModel = {
	parentQuestionId: Option<number>;
	parentRefId: Option<number>;
	questionId: Option<number>;
	questionRefId: Option<number>;
	questionCategoryId: Option<number>;
	questionAnswerId: Option<number>;
	checkListItemId: Option<string>;
	questionText: Option<string>;
	answer: Option<string>;
	answerValue: Option<string>;
	answerList: Option<Array<LELodasoftCommonModelsConfigurationWizardDataViewModel>>;
};
export const LELodasoftCommonModelsConfigurationWizardTreeViewModelIO = type({
	parentQuestionId: createOptionFromNullable(number),
	parentRefId: createOptionFromNullable(number),
	questionId: createOptionFromNullable(number),
	questionRefId: createOptionFromNullable(number),
	questionCategoryId: createOptionFromNullable(number),
	questionAnswerId: createOptionFromNullable(number),
	checkListItemId: createOptionFromNullable(string),
	questionText: createOptionFromNullable(string),
	answer: createOptionFromNullable(string),
	answerValue: createOptionFromNullable(string),
	answerList: createOptionFromNullable(array(LELodasoftCommonModelsConfigurationWizardDataViewModelIO)),
});
