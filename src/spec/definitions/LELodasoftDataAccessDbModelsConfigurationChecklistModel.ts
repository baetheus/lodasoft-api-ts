import { Option } from 'fp-ts/lib/Option';
import { number, boolean, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftDataAccessDbModelsConfigurationChecklistModel = {
	checkListId: Option<number>;
	checkLisItemId: Option<number>;
	parentRefId: Option<number>;
	parentQuestionId: Option<number>;
	questionAnswerId: Option<number>;
	answerValue: Option<boolean>;
	questionId: Option<number>;
	questionRefId: Option<number>;
	level: Option<number>;
};
export const LELodasoftDataAccessDbModelsConfigurationChecklistModelIO = type({
	checkListId: createOptionFromOptional(number, 'checkListId'),
	checkLisItemId: createOptionFromOptional(number, 'checkLisItemId'),
	parentRefId: createOptionFromOptional(number, 'parentRefId'),
	parentQuestionId: createOptionFromOptional(number, 'parentQuestionId'),
	questionAnswerId: createOptionFromOptional(number, 'questionAnswerId'),
	answerValue: createOptionFromOptional(boolean, 'answerValue'),
	questionId: createOptionFromOptional(number, 'questionId'),
	questionRefId: createOptionFromOptional(number, 'questionRefId'),
	level: createOptionFromOptional(number, 'level'),
});
