import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsAdminChecklistAnswerViewModel = {
	checklistAnswerId: Option<number>;
	answerText: Option<string>;
	answerId: Option<number>;
	applicationId: number;
	checkListId: number;
	questionId: number;
	loanDocTaskId: Option<number>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsAdminChecklistAnswerViewModelIO = type({
	checklistAnswerId: createOptionFromNullable(number),
	answerText: createOptionFromNullable(string),
	answerId: createOptionFromNullable(number),
	applicationId: number,
	checkListId: number,
	questionId: number,
	loanDocTaskId: createOptionFromNullable(number),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
