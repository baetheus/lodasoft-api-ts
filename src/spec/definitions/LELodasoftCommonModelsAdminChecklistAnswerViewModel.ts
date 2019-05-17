import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	checklistAnswerId: createOptionFromOptional(number, 'checklistAnswerId'),
	answerText: createOptionFromOptional(string, 'answerText'),
	answerId: createOptionFromOptional(number, 'answerId'),
	applicationId: number,
	checkListId: number,
	questionId: number,
	loanDocTaskId: createOptionFromOptional(number, 'loanDocTaskId'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromDatelike, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromDatelike, 'dateUpdated'),
});
