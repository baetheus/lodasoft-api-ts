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
	checklistAnswerId: createOptionFromNullable(number, 'checklistAnswerId'),
	answerText: createOptionFromNullable(string, 'answerText'),
	answerId: createOptionFromNullable(number, 'answerId'),
	applicationId: number,
	checkListId: number,
	questionId: number,
	loanDocTaskId: createOptionFromNullable(number, 'loanDocTaskId'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
