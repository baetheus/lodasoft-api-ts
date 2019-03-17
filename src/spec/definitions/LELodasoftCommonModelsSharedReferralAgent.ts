import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsSharedReferralAgent = {
	userId: Option<string>;
	firstName: Option<string>;
	lastName: Option<string>;
};
export const LELodasoftCommonModelsSharedReferralAgentIO = type({
	userId: createOptionFromNullable(string),
	firstName: createOptionFromNullable(string),
	lastName: createOptionFromNullable(string),
});
