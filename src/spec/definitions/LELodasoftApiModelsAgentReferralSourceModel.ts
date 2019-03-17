import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsAgentReferralSourceModel = {
	agentId: Option<number>;
	firstName: Option<string>;
	lastName: Option<string>;
	title: Option<string>;
	orgName: Option<string>;
};
export const LELodasoftApiModelsAgentReferralSourceModelIO = type({
	agentId: createOptionFromNullable(number),
	firstName: createOptionFromNullable(string),
	lastName: createOptionFromNullable(string),
	title: createOptionFromNullable(string),
	orgName: createOptionFromNullable(string),
});
