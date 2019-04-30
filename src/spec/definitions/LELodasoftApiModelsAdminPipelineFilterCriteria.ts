import { Option } from 'fp-ts/lib/Option';
import { number, array, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsAdminPipelineFilterCriteria = {
	loanPurposes: Option<Array<number>>;
	loanStatuses: Option<Array<number>>;
	users: Option<Array<string>>;
};
export const LELodasoftApiModelsAdminPipelineFilterCriteriaIO = type({
	loanPurposes: createOptionFromNullable(array(number), 'loanPurposes'),
	loanStatuses: createOptionFromNullable(array(number), 'loanStatuses'),
	users: createOptionFromNullable(array(string), 'users'),
});
