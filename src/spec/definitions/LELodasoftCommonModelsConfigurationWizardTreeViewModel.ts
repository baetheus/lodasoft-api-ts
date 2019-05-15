import {
	LELodasoftCommonModelsConfigurationWizardDataViewModel,
	LELodasoftCommonModelsConfigurationWizardDataViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationWizardDataViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, array, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	parentQuestionId: createOptionFromOptional(number, 'parentQuestionId'),
	parentRefId: createOptionFromOptional(number, 'parentRefId'),
	questionId: createOptionFromOptional(number, 'questionId'),
	questionRefId: createOptionFromOptional(number, 'questionRefId'),
	questionCategoryId: createOptionFromOptional(number, 'questionCategoryId'),
	questionAnswerId: createOptionFromOptional(number, 'questionAnswerId'),
	checkListItemId: createOptionFromOptional(string, 'checkListItemId'),
	questionText: createOptionFromOptional(string, 'questionText'),
	answer: createOptionFromOptional(string, 'answer'),
	answerValue: createOptionFromOptional(string, 'answerValue'),
	answerList: createOptionFromOptional(array(LELodasoftCommonModelsConfigurationWizardDataViewModelIO), 'answerList'),
});
