import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftCommonModelsLeadsProviderModelsAssignmentInfo = {
	userName: Option<string>;
	userGuid: Option<string>;
};
export const LELodasoftCommonModelsLeadsProviderModelsAssignmentInfoIO = type({
	userName: createOptionFromOptional(string, 'userName'),
	userGuid: createOptionFromOptional(string, 'userGuid'),
});
