import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsLeadsProviderModelsAssignmentInfo = {
	userName: Option<string>;
	userGuid: Option<string>;
};
export const LELodasoftCommonModelsLeadsProviderModelsAssignmentInfoIO = type({
	userName: createOptionFromNullable(string, 'userName'),
	userGuid: createOptionFromNullable(string, 'userGuid'),
});
