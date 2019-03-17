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
	checkListId: createOptionFromNullable(number),
	checkLisItemId: createOptionFromNullable(number),
	parentRefId: createOptionFromNullable(number),
	parentQuestionId: createOptionFromNullable(number),
	questionAnswerId: createOptionFromNullable(number),
	answerValue: createOptionFromNullable(boolean),
	questionId: createOptionFromNullable(number),
	questionRefId: createOptionFromNullable(number),
	level: createOptionFromNullable(number),
});
