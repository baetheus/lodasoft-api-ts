import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsSharedGeneratePrequalLetterResponse = { docFileGuid: Option<string> };
export const LELodasoftCommonModelsSharedGeneratePrequalLetterResponseIO = type({
	docFileGuid: createOptionFromOptional(string, 'docFileGuid'),
});
