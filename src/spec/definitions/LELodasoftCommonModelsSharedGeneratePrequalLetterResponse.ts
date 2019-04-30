import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsSharedGeneratePrequalLetterResponse = { docFileGuid: Option<string> };
export const LELodasoftCommonModelsSharedGeneratePrequalLetterResponseIO = type({
	docFileGuid: createOptionFromNullable(string, 'docFileGuid'),
});
