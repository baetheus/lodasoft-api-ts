import { Option } from 'fp-ts/lib/Option';
import { number, array, string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftApiModelsAdminPipelineFilterCriteria = {
	loanPurposes: Option<Array<number>>;
	loanStatuses: Option<Array<number>>;
	users: Option<Array<string>>;
};
export const LELodasoftApiModelsAdminPipelineFilterCriteriaIO = type({
	loanPurposes: createOptionFromOptional(array(number), 'loanPurposes'),
	loanStatuses: createOptionFromOptional(array(number), 'loanStatuses'),
	users: createOptionFromOptional(array(string), 'users'),
});
