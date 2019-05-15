import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftCommonModelsSharedReferralAgent = {
	userId: Option<string>;
	firstName: Option<string>;
	lastName: Option<string>;
};
export const LELodasoftCommonModelsSharedReferralAgentIO = type({
	userId: createOptionFromOptional(string, 'userId'),
	firstName: createOptionFromOptional(string, 'firstName'),
	lastName: createOptionFromOptional(string, 'lastName'),
});
