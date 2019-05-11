import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsSharedGenerateCreditAuthResponse = { docFileGuid: Option<string> };
export const LELodasoftCommonModelsSharedGenerateCreditAuthResponseIO = type({
	docFileGuid: createOptionFromOptional(string, 'docFileGuid'),
});
