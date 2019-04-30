import { Option } from 'fp-ts/lib/Option';
import { number, boolean, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

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
	checkListId: createOptionFromNullable(number, 'checkListId'),
	checkLisItemId: createOptionFromNullable(number, 'checkLisItemId'),
	parentRefId: createOptionFromNullable(number, 'parentRefId'),
	parentQuestionId: createOptionFromNullable(number, 'parentQuestionId'),
	questionAnswerId: createOptionFromNullable(number, 'questionAnswerId'),
	answerValue: createOptionFromNullable(boolean, 'answerValue'),
	questionId: createOptionFromNullable(number, 'questionId'),
	questionRefId: createOptionFromNullable(number, 'questionRefId'),
	level: createOptionFromNullable(number, 'level'),
});
