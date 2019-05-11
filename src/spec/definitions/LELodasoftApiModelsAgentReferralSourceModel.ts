import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftApiModelsAgentReferralSourceModel = {
	agentId: Option<number>;
	firstName: Option<string>;
	lastName: Option<string>;
	title: Option<string>;
	orgName: Option<string>;
};
export const LELodasoftApiModelsAgentReferralSourceModelIO = type({
	agentId: createOptionFromOptional(number, 'agentId'),
	firstName: createOptionFromOptional(string, 'firstName'),
	lastName: createOptionFromOptional(string, 'lastName'),
	title: createOptionFromOptional(string, 'title'),
	orgName: createOptionFromOptional(string, 'orgName'),
});
