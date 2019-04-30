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
	parentQuestionId: createOptionFromNullable(number, 'parentQuestionId'),
	parentRefId: createOptionFromNullable(number, 'parentRefId'),
	questionId: createOptionFromNullable(number, 'questionId'),
	questionRefId: createOptionFromNullable(number, 'questionRefId'),
	questionCategoryId: createOptionFromNullable(number, 'questionCategoryId'),
	questionAnswerId: createOptionFromNullable(number, 'questionAnswerId'),
	checkListItemId: createOptionFromNullable(string, 'checkListItemId'),
	questionText: createOptionFromNullable(string, 'questionText'),
	answer: createOptionFromNullable(string, 'answer'),
	answerValue: createOptionFromNullable(string, 'answerValue'),
	answerList: createOptionFromNullable(array(LELodasoftCommonModelsConfigurationWizardDataViewModelIO), 'answerList'),
});
